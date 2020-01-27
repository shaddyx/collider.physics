class Asserts{
    static equals(a, b, text){
        if (a !== b) {
            throw new Exception(text || `${a} != ${b}`);
        }
    }
    static assertFalse(a, text){
        if (a) {
            throw new Exception(text || `${a} is not false`);
        }
    }
}
