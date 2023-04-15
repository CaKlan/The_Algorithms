# 퀵 정렬

```rust
let a = 3;

let mut test = vec![5, 6, 3, 4, 9, 2, 7, 1];

let size = test.len();
quick_sort(&mut test, 0 as isize, size as isize - 1);
println!("{:?}", test);

fn partition(arr : &mut Vec<i32>, left : isize, right : isize) -> isize{
    let mut low = left - 1;
    let mut high = right;
    let pivot = right as usize;

    loop {
        low += 1;

        while arr[low as usize] < arr[pivot] {
            low += 1;
        }
        high -= 1;
        while high >= 0 && arr[high as usize] > arr[pivot] {
            high -= 1;
        }

        if (low >= high){
            break;
        } else{
            arr.swap(low as usize, high as usize);
        }
    }

    arr.swap(low as usize, pivot as usize);
    return low;
}

fn quick_sort(arr : &mut Vec<i32>, left : isize, right : isize){
    
    if left < right{
        let p = partition(arr, left, right);
        quick_sort(arr, left, p-1);
        quick_sort(arr, p+1, right);
    }
}

```