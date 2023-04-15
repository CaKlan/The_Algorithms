# 거품 정렬

```rust
let mut test = [2, 6, 3, 4, 9, 5, 7, 1];

fn bubble_sort(arr : &mut [i32]){
    for i in 0..arr.len()-1 {
        for j in 0..arr.len() - i {
            if arr[j] > arr[j+1] {
                (arr[j], arr[j+1]) = (arr[j+1], arr[j]);
            }
        }
    }
}

bubble_sort(&mut test);
assert_eq!([1,2,3,4,5,6,7,9], test);