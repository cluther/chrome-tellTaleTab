#!/usr/bin/env python
import sys, Image, numpy

if len(sys.argv) < 2:
    print >> sys.stderr, "Usage: %s <favicon.png>" % sys.argv[0]
    sys.exit(1)

im = Image.open(sys.argv[1])
a = numpy.asarray(im)
for r in a:
    row = []
    for c in r:
        if c[3] == 0:
            row.append('')
        else:
            row.append("#%s%s%s" % (
                hex(c[0].tolist())[2:],
                hex(c[1].tolist())[2:],
                hex(c[2].tolist())[2:]))
    print str(row) + ','
