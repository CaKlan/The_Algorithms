# 삽입 정렬

장점
 + 안정적임
 + 알고리즘이 간단함

단점
 + 스왑이 많음

```rust
fn insert_sort(arr : &mut Vec<i32>){
    let mut swap = 0;
    for i in 1..arr.len(){
        for j in (1..=i).rev(){
            if arr[j] < arr[j-1]{
                (arr[j], arr[j-1]) = (arr[j-1], arr[j]);
                swap += 1;
            }
        }
    }
    println!("swap : {:?}", swap);
}

let mut test = vec![2, 6, 3, 4, 9, 5, 7, 1];
insert_sort(&mut test);
print!("{:?}", test);
```