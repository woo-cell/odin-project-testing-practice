const functions = require("./functions");

// tests for reverse
test('Testing empty input', () => {
    expect(functions.reverseString("")).toBe("");
});

test('Testing single word', () => {
    expect(functions.reverseString("hello")).toBe("olleh");
});

test('Testing medium length input', () => {
    expect(functions.reverseString("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")).toBe(".tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL");
});

test('Testing long input', () => {
    expect(functions.reverseString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec felis ligula, cursus a ullamcorper vel, ultricies sed libero. Sed venenatis, justo quis molestie blandit, elit orci placerat magna, sed consequat nisi lectus vel libero. Nulla facilisi. Sed ac sapien sed neque lacinia porttitor et a tellus. Nullam eget ante nec ex semper placerat a ut purus. Proin mattis sollicitudin nisi, sit amet varius tortor scelerisque id. Curabitur nec tincidunt felis, sed tincidunt arcu. Suspendisse potenti. Donec ac feugiat enim.")).toBe(".mine taiguef ca cenoD .itnetop essidnepsuS .ucra tnudicnit des ,silef tnudicnit cen rutibaruC .di euqsirelecs rotrot suirav tema tis ,isin niduticillos sittam niorP .surup tu a tarecalp repmes xe cen etna tege malluN .sullet a te rotittrop ainical euqen des neipas ca deS .isilicaf alluN .orebil lev sutcel isin tauqesnoc des ,angam tarecalp icro tile ,tidnalb eitselom siuq otsuj ,sitanenev deS .orebil des seicirtlu ,lev reprocmallu a susruc ,alugil silef cenoD ;earuc ailibuc ereusop secirtlu te sutcul icro subicuaf ni simirp muspi etna mulubitseV .tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL");
});

test('Testing input containing numbers and special chars', () => {
    expect(functions.reverseString("Lorem ipsum 2 dolor sit amet, \"\" !#$%&'() consectetur adipiscing elit.")).toBe(".tile gnicsipida rutetcesnoc )('&%$#! \"\" ,tema tis rolod 2 muspi meroL");
});