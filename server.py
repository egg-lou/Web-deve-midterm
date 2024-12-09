from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

port = int(os.environ.get('PORT', 8000))
print(f"Starting server on port {port}")
httpd = HTTPServer(('0.0.0.0', port), CORSRequestHandler)
httpd.serve_forever()
