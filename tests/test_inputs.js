let ip_single_nested = "var personPosition : record\
 name: record\
   firstName: string;\
   lastName: string;\
 end;\
 position: record\
   x: number;\
   y: number;\
   z: number;\
 end;\
end;";

let op_single_nested = '[\
   [\
      "personPosition",\
      [\
         [\
            "name",\
            [\
               [\
                  "firstName",\
                  "string"\
               ],\
               [\
                  "lastName",\
                  "string"\
               ]\
            ]\
         ],\
         [\
            "position",\
            [\
               [\
                  "x",\
                  "number"\
               ],\
               [\
                  "y",\
                  "number"\
               ],\
               [\
                  "z",\
                  "number"\
               ]\
            ]\
         ]\
      ]\
   ]\
]';

let ip_super_nested = "# test for a declaration with heavy nesting\nvar super_nested : record\na_depth3: record\na_depth2: record\na_depth1: record\na_depth0: record\nn: number;\nstr: string;\nend; #a_depth0\nb_depth0: record\nstr: string;\nn: number;\nend; #b_depth0\nend; #a_depth1\n b_depth1: record\na_depth0: record\nnx: number;\nstrx: string;\nend;\n b_depth0: record\nstrx: string;\nnx: number;\nend;\nend; #b_depth1\nend; #a_depth2\nx_depth2: record\na_depth1: record\na_depth0: record\nn: number;\nstr: string;\n end;\n b_depth0: record\n str: string;\n n: number;\nend;\nend; #a_depth1\n b_depth1: record\n a_depth0: record\n nx: number;\n strx: string;\n end;\n b_depth0: record\n strx: string;\n nx: number;\n end;\n end; #b_depth1\n end; #a_depth2\n end; #a_depth3\n z_depth3: record\n x_depth2: record\n y_depth1: record\n u_depth0: record\n n: number;\n str: string;\n end;\n v_depth0: record\n str: string;\n n: number;\n end;\n end; #y_depth1\n g_depth1: record\n a_depth0: record\n nx: number;\n strx: string;\n end;\n b_depth0: record\n strx: string;\n nx: number;\n end;\n end; #g_depth1\n end; #x_depth2\n y_depth2: record\n a_depth1: record\n a_depth0: record\n n: number;\n str: string;\n end;\n b_depth0: record\n str: string;\n n: number;\n end;\n end; #a_depth1\n b_depth1: record\n a_depth0: record\n nx: number;\n strx: string;\n end;\n b_depth0: record\n strx: string;\n nx: number;\n end;\n end; #b_depth1\n end; #y_depth2\n end; #z_depth3\n end; #super_nested";

let op_super_nested = '[\
   [\
      "super_nested",\
      [\
         [\
            "a_depth3",\
            [\
               [\
                  "a_depth2",\
                  [\
                     [\
                        "a_depth1",\
                        [\
                           [\
                              "a_depth0",\
                              [\
                                 [\
                                    "n",\
                                    "number"\
                                 ],\
                                 [\
                                    "str",\
                                    "string"\
                                 ]\
                              ]\
                           ],\
                           [\
                              "b_depth0",\
                              [\
                                 [\
                                    "str",\
                                    "string"\
                                 ],\
                                 [\
                                    "n",\
                                    "number"\
                                 ]\
                              ]\
                           ]\
                        ]\
                     ],\
                     [\
                        "b_depth1",\
                        [\
                           [\
                              "a_depth0",\
                              [\
                                 [\
                                    "nx",\
                                    "number"\
                                 ],\
                                 [\
                                    "strx",\
                                    "string"\
                                 ]\
                              ]\
                           ],\
                           [\
                              "b_depth0",\
                              [\
                                 [\
                                    "strx",\
                                    "string"\
                                 ],\
                                 [\
                                    "nx",\
                                    "number"\
                                 ]\
                              ]\
                           ]\
                        ]\
                     ]\
                  ]\
               ],\
               [\
                  "x_depth2",\
                  [\
                     [\
                        "a_depth1",\
                        [\
                           [\
                              "a_depth0",\
                              [\
                                 [\
                                    "n",\
                                    "number"\
                                 ],\
                                 [\
                                    "str",\
                                    "string"\
                                 ]\
                              ]\
                           ],\
                           [\
                              "b_depth0",\
                              [\
                                 [\
                                    "str",\
                                    "string"\
                                 ],\
                                 [\
                                    "n",\
                                    "number"\
                                 ]\
                              ]\
                           ]\
                        ]\
                     ],\
                     [\
                        "b_depth1",\
                        [\
                           [\
                              "a_depth0",\
                              [\
                                 [\
                                    "nx",\
                                    "number"\
                                 ],\
                                 [\
                                    "strx",\
                                    "string"\
                                 ]\
                              ]\
                           ],\
                           [\
                              "b_depth0",\
                              [\
                                 [\
                                    "strx",\
                                    "string"\
                                 ],\
                                 [\
                                    "nx",\
                                    "number"\
                                 ]\
                              ]\
                           ]\
                        ]\
                     ]\
                  ]\
               ]\
            ]\
         ],\
         [\
            "z_depth3",\
            [\
               [\
                  "x_depth2",\
                  [\
                     [\
                        "y_depth1",\
                        [\
                           [\
                              "u_depth0",\
                              [\
                                 [\
                                    "n",\
                                    "number"\
                                 ],\
                                 [\
                                    "str",\
                                    "string"\
                                 ]\
                              ]\
                           ],\
                           [\
                              "v_depth0",\
                              [\
                                 [\
                                    "str",\
                                    "string"\
                                 ],\
                                 [\
                                    "n",\
                                    "number"\
                                 ]\
                              ]\
                           ]\
                        ]\
                     ],\
                     [\
                        "g_depth1",\
                        [\
                           [\
                              "a_depth0",\
                              [\
                                 [\
                                    "nx",\
                                    "number"\
                                 ],\
                                 [\
                                    "strx",\
                                    "string"\
                                 ]\
                              ]\
                           ],\
                           [\
                              "b_depth0",\
                              [\
                                 [\
                                    "strx",\
                                    "string"\
                                 ],\
                                 [\
                                    "nx",\
                                    "number"\
                                 ]\
                              ]\
                           ]\
                        ]\
                     ]\
                  ]\
               ],\
               [\
                  "y_depth2",\
                  [\
                     [\
                        "a_depth1",\
                        [\
                           [\
                              "a_depth0",\
                              [\
                                 [\
                                    "n",\
                                    "number"\
                                 ],\
                                 [\
                                    "str",\
                                    "string"\
                                 ]\
                              ]\
                           ],\
                           [\
                              "b_depth0",\
                              [\
                                 [\
                                    "str",\
                                    "string"\
                                 ],\
                                 [\
                                    "n",\
                                    "number"\
                                 ]\
                              ]\
                           ]\
                        ]\
                     ],\
                     [\
                        "b_depth1",\
                        [\
                           [\
                              "a_depth0",\
                              [\
                                 [\
                                    "nx",\
                                    "number"\
                                 ],\
                                 [\
                                    "strx",\
                                    "string"\
                                 ]\
                              ]\
                           ],\
                           [\
                              "b_depth0",\
                              [\
                                 [\
                                    "strx",\
                                    "string"\
                                 ],\
                                 [\
                                    "nx",\
                                    "number"\
                                 ]\
                              ]\
                           ]\
                        ]\
                     ]\
                  ]\
               ]\
            ]\
         ]\
      ]\
   ]\
]';

let ip_combo = "var single22: number;\n" + "\n" + "var\n" + "single33\n" + ":\n" + "string #some comment\n" + "#another comment\n" + "  ;\n" + "\n" + "var nested_23 : record\n" + "  triangle: record  #3 points\n" + "    point1: record x: number; y: number; end;\n" + "    point2: record x: number; y: number; end;\n" + "    point3: record x: number; y: number; end;\n" + "  end;\n" + "  color: record #RGB components\n" + "    r: number; g: number; b: number;\n" + "  end;\n" + "  index: number;\n" + "  pos: record x: number; y: number; end;\n" + "end;";

let op_combo = "[\n" + "   [\n" + '      "single22",\n' + '      "number"\n' + "   ],\n" + "   [\n" + '      "single33",\n' + '      "string"\n' + "   ],\n" + "   [\n" + '      "nested_23",\n' + "      [\n" + "         [\n" + '            "triangle",\n' + "            [\n" + "               [\n" + '                  "point1",\n' + "                  [\n" + "                     [\n" + '                        "x",\n' + '                        "number"\n' + "                     ],\n" + "                     [\n" + '                        "y",\n' + '                        "number"\n' + "                     ]\n" + "                  ]\n" + "               ],\n" + "               [\n" + '                  "point2",\n' + "                  [\n" + "                     [\n" + '                        "x",\n' + '                        "number"\n' + "                     ],\n" + "                     [\n" + '                        "y",\n' + '                        "number"\n' + "                     ]\n" + "                  ]\n" + "               ],\n" + "               [\n" + '                  "point3",\n' + "                  [\n" + "                     [\n" + '                        "x",\n' + '                        "number"\n' + "                     ],\n" + "                     [\n" + '                        "y",\n' + '                        "number"\n' + "                     ]\n" + "                  ]\n" + "               ]\n" + "            ]\n" + "         ],\n" + "         [\n" + '            "color",\n' + "            [\n" + "               [\n" + '                  "r",\n' + '                  "number"\n' + "               ],\n" + "               [\n" + '                  "g",\n' + '                  "number"\n' + "               ],\n" + "               [\n" + '                  "b",\n' + '                  "number"\n' + "               ]\n" + "            ]\n" + "         ],\n" + "         [\n" + '            "index",\n' + '            "number"\n' + "         ],\n" + "         [\n" + '            "pos",\n' + "            [\n" + "               [\n" + '                  "x",\n' + '                  "number"\n' + "               ],\n" + "               [\n" + '                  "y",\n' + '                  "number"\n' + "               ]\n" + "            ]\n" + "         ]\n" + "      ]\n" + "   ]\n" + "]";

let test_io = Object.freeze({
    ip_combo,
    op_combo,
    ip_single_nested,
    ip_super_nested,
    op_single_nested,
    op_super_nested
});

export {
    test_io
};
// lexer("#this is a record\n");
