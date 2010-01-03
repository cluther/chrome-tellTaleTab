#!/usr/bin/env python
import sys, Image, numpy

if len(sys.argv) < 2:
    print >> sys.stderr, "Usage: %s <favicon.png>" % sys.argv[0]
    sys.exit(1)

def toHex(x):
    x = hex(x.tolist())[2:]
    if len(x) < 2:
        x = "0%s" % x
    return x

im = Image.open(sys.argv[1])
a = numpy.asarray(im)
for r in a:
    row = []
    for c in r:
        if c[3] == 0:
            row.append('')
        else:
            row.append("#%s%s%s" % (toHex(c[0]), toHex(c[1]), toHex(c[2])))
    print str(row) + ','
