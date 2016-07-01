9.7.1 The grammar for points specifications in ‘polyline’ and ‘polygon’ elements

The following is the Extended Backus-Naur Form (EBNF) for points specifications in ‘polyline’ and ‘polygon’ elements. The following notation is used:

*: 0 or more
+: 1 or more
?: 0 or 1
(): grouping
|: separates alternatives
double quotes surround literals
list-of-points:
    wsp* coordinate-pairs? wsp*
coordinate-pairs:
    coordinate-pair
    | coordinate-pair comma-wsp coordinate-pairs
coordinate-pair:
    coordinate comma-wsp coordinate
    | coordinate negative-coordinate
coordinate:
    number
number:
    sign? integer-constant
    | sign? floating-point-constant
negative-coordinate:
    "-" integer-constant
    | "-" floating-point-constant
comma-wsp:
    (wsp+ comma? wsp*) | (comma wsp*)
comma:
    ","
integer-constant:
    digit-sequence
floating-point-constant:
    fractional-constant exponent?
    | digit-sequence exponent
fractional-constant:
    digit-sequence? "." digit-sequence
    | digit-sequence "."
exponent:
    ( "e" | "E" ) sign? digit-sequence
sign:
    "+" | "-"
digit-sequence:
    digit
    | digit digit-sequence
digit:
    "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
wsp:
    (#x20 | #x9 | #xD | #xA)+