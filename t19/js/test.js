describe("checkBrackets", function () {
  describe("parse ivalid types", function () {
    it("parse number",
      function () {
        assert.equal(checkBrackets(42), 0);
      });
    it("parse NaN",
      function () {
        assert.equal(checkBrackets(NaN), 0);
      });
    it("parse boolean",
      function () {
        assert.equal(checkBrackets(true), 0);
      });
    it("parse undefined",
      function () {
        assert.equal(checkBrackets(undefined), 0);
      });
    it("parse array",
      function () {
        assert.equal(checkBrackets(["hello)((", 2, true]), 0);
      });
  });
  describe("parse valid cases", function () {
    it("case 1",
      function () {
        assert.equal(checkBrackets(")"), 1);
      });
    it("case 2",
      function () {
        assert.equal(checkBrackets("))("), 3);
      });
    it("case 3",
      function () {
        assert.equal(checkBrackets("(())"), 0);
      });
    it("case 4",
      function () {
        assert.equal(checkBrackets("))))((()()()))"), 4);
      });
    it("case 5",
      function () {
        assert.equal(checkBrackets("))))((abcd()efg))"), 4);
      });
    it("case 6",
      function () {
        assert.equal(checkBrackets(")A(((BSd_ )"), 3);
      });
    it("case 7",
      function () {
        assert.equal(checkBrackets(""), 0);
      });
    it("case 8",
      function () {
        assert.equal(checkBrackets("abcdefg"), 0);
      });
    it("case 9",
      function () {
        assert.equal(checkBrackets("()))))"), 4);
      });
    it("case 10",
      function () {
        assert.equal(checkBrackets(")()()()()()()("), 2);
      });
  });
});

mocha.run();
