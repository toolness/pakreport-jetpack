import os
import urllib

if __name__ == '__main__':
    lines = [line.strip()
             for line in open(os.path.join('lib', 'main.js'))]
    print 'javascript:' + ' '.join(lines)
