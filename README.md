# Recursive Descent Parser
A rudimentary recursive descent parser implemented in JavaScript to parse the given Context Free Grammar (CFG) and to output the corresponding Abstract Syntax Tree (AST) in JSON.


## Grammar 

The Context Free Grammar is Defined as Follows : 

```
program   -> decl*

decl      -> 'var' id ':' type ';'

type      -> 'string' | 'number' | record

record    -> 'record' field+ 'end'

field     -> id ':' type

id        -> [a-zA-Z0-9_]+
```

Example Input : 

```
var personPosition : record
 name: record
   firstName: string;
   lastName: string;
 end;
 position: record
   x: number;
   y: number;
   z: number;
 end;
end;
```

Example Output : 

```
[
  [
    "personPosition",
    [
      [
        "name",
        [
          [
            "firstName",
            "string"
          ],
          [
            "lastName",
            "string"
          ]
        ]
      ],
      [
        "position",
        [
          [
            "x",
            "number"
          ],
          [
            "y",
            "number"
          ],
          [
            "z",
            "number"
          ]
        ]
      ]
    ]
  ]
]
```

## Structure

### Lexer

The parser consits of a trivial lexer which breaks down the input string into an array of <lexeme, kind> pairs where each lexeme (token) is associated with a 'Kind' (ID|TYPE|VAR etc). 

### Descent Parser

The recursive descent parser will go throgugh the array produced by the lexer, sometimes 'peeking' (lookahead) into the next token to decide which recursive function to call based on the type of the token.

To run the tests execute : do-tests.sh ./decls.sh