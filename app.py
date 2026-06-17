from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
import os

PORT = 8000

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)

    def log_message(self, format, *args):
        # keep console output clean
        pass

if __name__ == '__main__':
    server = ThreadingHTTPServer(('0.0.0.0', PORT), Handler)
    print(f'Serving invitation at http://localhost:{PORT}')
    server.serve_forever()
