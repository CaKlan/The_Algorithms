# 선택 정렬 (Selection Sort)


```rust
fn select_sort(arr : &mut Vec<i32>){
    let mut swap = 0; // test
    for i in 0..arr.len(){
        let mut min = i;

        for j in (i+1)..arr.len(){
            if arr[min] >= arr[j]{
                min = j;
            }
        }

        (arr[i], arr[min]) = (arr[min], arr[i]);
        swap += 1;
    }
    println!("swap : {:?}", swap);
}

let mut test = vec![2, 6, 3, 4, 9, 5, 7, 1];
select_sort(&mut test);
print!("{:?}", test);
```