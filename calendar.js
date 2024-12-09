document.addEventListener('alpine:init', () => {
    Alpine.data('calendar', () => ({
        currentDate: null,
        today: null,
        currentTime: '',
        currentFullDate: '',
        holidays: [],
        daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

        async init() {
            this.initializeDates();
            await this.fetchHolidays();
            this.updateTime(); 
            setInterval(() => this.updateTime(), 1000);
        },

        initializeDates() {
            const now = new Date();
            this.currentDate = now;
            this.today = now;
        },

        updateTime() {
            const now = new Date();
            // Format time in UTC+8
            this.currentTime = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
                timeZone: 'Asia/Singapore' // UTC+8
            });
            // Format full date
            this.currentFullDate = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'Asia/Singapore'
            });
            // Update today's date
            this.today = now;
        },

        async fetchHolidays() {
            try {
                const response = await fetch('/holidays.json');
                const data = await response.json();
                this.holidays = data.holidays;
            } catch (error) {
                console.error('Error loading holidays:', error);
                this.holidays = [];
            }
        },

        get currentMonthYear() {
            return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        },

        isToday(date) {
            return date.getDate() === this.today.getDate() &&
                   date.getMonth() === this.today.getMonth() &&
                   date.getFullYear() === this.today.getFullYear();
        },

        goToToday() {
            this.currentDate = new Date();
        },

        get calendarDays() {
            const year = this.currentDate.getFullYear();
            const month = this.currentDate.getMonth();
            
            const firstDayOfMonth = new Date(year, month, 1);
            const lastDayOfMonth = new Date(year, month + 1, 0);
            
            const daysInMonth = lastDayOfMonth.getDate();
            const startingDayOfWeek = firstDayOfMonth.getDay();
            
            const days = [];
            
            // Previous month's days
            for (let i = startingDayOfWeek - 1; i >= 0; i--) {
                const date = new Date(year, month, 0 - i);
                days.push(this.createDayObject(date, false));
            }
            
            // Current month's days
            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(year, month, day);
                days.push(this.createDayObject(date, true));
            }
            
            // Next month's days
            const remainingDays = 42 - days.length; // 6 rows × 7 days = 42
            for (let day = 1; day <= remainingDays; day++) {
                const date = new Date(year, month + 1, day);
                days.push(this.createDayObject(date, false));
            }
            
            return days;
        },

        formatMonthDay(date) {
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${month}-${day}`;
        },

        createDayObject(date, isCurrentMonth) {
            // Create a new date object at noon to avoid timezone issues
            const localDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
            const monthDay = this.formatMonthDay(localDate);
            const holiday = this.holidays.find(h => h.monthDay === monthDay);
            
            if (holiday) {
                // Create a full date string for the holiday
                const year = localDate.getFullYear();
                holiday.date = `${year}-${monthDay}`;
            }
            
            return {
                date: localDate.toISOString().split('T')[0],
                dayNumber: localDate.getDate(),
                isCurrentMonth,
                isToday: this.isToday(localDate),
                hasHoliday: !!holiday,
                holiday
            };
        },

        previousMonth() {
            this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
        },

        nextMonth() {
            this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
        },

        showHolidayDetails(holiday) {
            window.location.href = `holiday.html?date=${holiday.monthDay}`;
        }
    }));
});
