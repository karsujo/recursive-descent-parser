import {lexer, descentParser} from './descentParser.js';
import {test_io} from './test_inputs.js';

function run_test(name, ip, op) {
    try {
        let toks = lexer(ip);
        let _parser = new descentParser(toks)
        let ast = _parser.parse();
        if (JSON.stringify(ast) != JSON.stringify(op)) 
            throw new Error("Output doesnt match expected : " + err + " ");
        


        let ast_string = JSON.stringify(ast);
        console.log(name + " : SUCCESS ");
    } catch (err) {
        console.log(name + " : FAILURE : " + err + " ");
    }
}

function run_test_err(name, ip, op) {
    try {
        let toks = lexer(ip);
        let _parser = new descentParser(toks)
        let ast = _parser.parse();
        console.log(name + " ");
        console.log("\n");
    } catch (err) {
        console.log(name + " : SUCCESS ");

    }
}
// -------TESTS----------------------------------------------------------------------------------------------

function runFunctionalTests() {
    console.log("<===============================Functional Tests : ===============================================>")
    run_test("totally empty", "", []);
    run_test("empty with comment", "# this file contains no declarations", []);
    // TODO: Change regex to match exact reserved word
    run_test("simple single decl", "#simple single declaration\nvar variable: number ;", [["variable", "number"]]);
    run_test("multiple simple decl", "# this file contains multiple simple declarations\nvar _some_var1 : number;\nvar _some_2OtherVar23 :\n string;", [
        [
            "_some_var1", "number"
        ],
        [
            "_some_2OtherVar23", "string"
        ]
    ]);
    run_test("single complex", "# this file contains a single declaration using a non-nested record\nvar point3D :\nrecord\nx: number;\ny: number;\nz: number;\nend;", [[
            "point3D",
            [
                [
                    "x", "number"
                ],
                [
                    "y", "number"
                ],
                [
                    "z", "number"
                ]
            ]
        ]])
    run_test("single field", "# this file contains a single declaration using a record with a single field\nvar singleFieldRec :\nrecord\nfield: string;\nend;", [[
            "singleFieldRec",
            [
                ["field", "string"]
            ]
        ]]);
    run_test("super nested", test_io.ip_super_nested, JSON.parse(test_io.op_super_nested));
    run_test("single nested", test_io.ip_single_nested, JSON.parse(test_io.op_single_nested));
    run_test("combo", test_io.ip_combo, JSON.parse(test_io.op_combo));
}


// ----ERROR TESTS----------------------------------------------------

function runErrorTests() {
    console.log("<===============================Error Tests : ===============================================>")

    run_test_err("error - missing ;", "var x : string", "error");
    run_test_err("error - missing var", "x : string ;", "error");
    run_test_err("error - missing colon", "var x number;", "error");
    run_test_err("error - typeid", "var number x;", "error");
    run_test_err("error - notype", "var x : string1;", "error");
    run_test_err("error - empty record", "var rec : record end;", "error");
    run_test_err("error - field missing semi", "var r : record x : number end;", "error");
    run_test_err("error - field missing colon", "var x: record a number end;", "error");
    run_test_err("error - field missing type", "var z : record x: string1; end;", "error");
    // TODO: try to make the code correspond to regex '+' or xx* i.e, one or more of x.
    run_test_err("error - field empty record", "var Record: record x: record end; end;", "error");
    run_test_err("error - bad char", "var a: number; .", "error");
}

runFunctionalTests();
runErrorTests();

export {
    run_test,
    runFunctionalTests,
    runErrorTests
};
