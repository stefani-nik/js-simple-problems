function* fibonacci() {
   let prev = 0;
    let next = 1;
    while (true){
        next = prev + next;
        prev = next - prev;
        yield prev;
    }
}
let get = fibonacci();
console.log(get.next());
console.log(get.next());
console.log(get.next());
console.log(get.next());
console.log(get.next());
console.log(get.next());

