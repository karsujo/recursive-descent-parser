import {exit} from 'process';
import fs from 'fs';

let isExit = true;
let isConsolelog = true;


function lexer(str) { // scan tokens
    const tokens = [];
    let chunk;
    for (let s = str; s.length > 0; s = chunk !== null ? s.slice(chunk[0].length) : s.slice(1)) {
        if (s.match(/^[ \t\n]+/)) { // match \n or space or \t
            chunk = s.match(/^[ \t]+/)
            continue; // skip linear whitespace
        } else if (s.match(/^var(?![a-zA-Z0-9_]+)/)) { // match reserved keyword var(not followed by an identifier). For example, variable or var_123 wont be matched.
            chunk = s.match(/^var(?![a-zA-Z0-9_]+)/);
            tokens.push(new Token('VAR', chunk[0]));
        } else if (s.match(/^end/)) { // match reserved keyword end
            chunk = s.match(/^end/);
            tokens.push(new Token('END', chunk[0]));
        } else if (s.match(/^string(?![a-zA-Z0-9_]+)|^number(?![a-zA-Z0-9_]+)|^record(?![a-zA-Z0-9_]+)/)) { // match types : string, number, record
            chunk = s.match(/^string(?![a-zA-Z0-9_]+)|^number(?![a-zA-Z0-9_]+)|^record(?![a-zA-Z0-9_]+)/);
            tokens.push(new Token('TYPE', chunk[0]));
        } else if (s.match(/^#.*/)) { // match comments (# .... to EOL)
            chunk = s.match(/^#.*/)
            continue; // skip comments
        } else if (s.match(/^[a-zA-Z0-9_]+/)) { // match identifiers (_ or alphaNumeric)
            chunk = s.match(/^[a-zA-Z0-9_]+/);
            tokens.push(new Token('ID', chunk[0]))
        } else if (s.match(/^./)) { // Match any single character
            chunk = s.match(/^./);
            tokens.push(new Token(chunk[0], chunk[0]))
        }
    }
    //console.log(tokens);
    return tokens;
}


class Ast {
    constructor(tag, ...kids) {
        this.key = tag;
        this.value = kids;
    }
}


class Token {
    constructor(kind, lexeme) {
        Object.assign(this, {kind, lexeme});
    }
}


class Parser {

    constructor(tokens) {
        this._tokens = tokens;
        this._index = 0;
        this.tok = this._nextToken(); 
    }

    parse() {
        try {
            let result = this.parseGrammar();
            if (!this.peek('EOF')) {
                const msg = `expecting end-of-input at "${
                    this.tok.lexeme
                }"`;
                exit_with_error(msg);
                throw new SyntaxError(msg);

            }
            return result;
        } catch (err) {
            return err;
        }
    }
    peek(kind) {
        return this.tok.kind === kind;
    }
    consume(kind) {
        if (this.peek(kind)) {
            this.tok = this._nextToken();
        } else {
            const msg = `expecting ${kind} at "${
                this.tok.lexeme
            }"`;
            exit_with_error(msg);
            throw new SyntaxError(msg);
        }
    }
    _nextToken() {
        if (this._index < this._tokens.length) {
            return this._tokens[this._index ++];
        } else {
            return new Token('EOF', '<EOF>');
        }
    }

    parseGrammar() {
        let ast = [];
        while (this.peek('VAR')) {
            let a_chunk = this.decl();
            ast.push(a_chunk);
        }
        return ast;
    }


    decl() {
        let ast_branch = [];
        if (this.peek('VAR')) {
            this.consume('VAR'); // var
            if (this.tok.kind == 'ID') 
                ast_branch.push(this.tok.lexeme);
            

            this.consume('ID'); // id
            this.consume(':'); // :
            let __tok = this.tok;
            this.consume('TYPE'); // type
            if (__tok.lexeme == 'record') {
                let res = this.record();
                ast_branch.push(res);
            } else {
                ast_branch.push(__tok.lexeme);
            }
            this.consume(';');
        }
        return ast_branch;
    }


    record() {
        let ast_branch = [];

        // x
        let sub_branch = [];
        if (this.tok.kind == 'ID') 
            sub_branch.push(this.tok.lexeme);
        

        this.consume('ID');
        this.consume(':');
        let __tok = this.tok;
        this.consume('TYPE'); // type
        if (__tok.lexeme == 'record') {
            let res = this.record();
            sub_branch.push(res);
        } else {
            sub_branch.push(__tok.lexeme);
        } ast_branch.push(sub_branch);
        this.consume(';');

        // x*
        while (!this.peek('END')) {
            let sub_branch = [];
            if (this.tok.kind == 'ID') 
                sub_branch.push(this.tok.lexeme);
            

            this.consume('ID');
            this.consume(':');
            let __tok = this.tok;
            this.consume('TYPE'); // type
            if (__tok.lexeme == 'record') {
                let res = this.record();
                sub_branch.push(res);
            } else {
                sub_branch.push(__tok.lexeme);
            } ast_branch.push(sub_branch);
            this.consume(';');
        }
        this.consume('END');
        return ast_branch;
    }

}

function exit_with_error(errMsg) {
    if (isConsolelog) {
        console.error("ERROR : " + errMsg + " ");
    }
    if (isExit) {
        exit(1);
    }

}


// ---------------------------------------------------------------------------------------------------------

function run_program()
{
  let ipStr= fs.readFileSync(0, 'utf8');
  //console.log("FROM JS! : " + ipStr);
  let toks = lexer(ipStr);
  let p = new Parser(toks);
  let ast_output = JSON.stringify(p.parse());
  console.log(ast_output);
}


run_program();

export {
    lexer,
    Parser as descentParser
}
