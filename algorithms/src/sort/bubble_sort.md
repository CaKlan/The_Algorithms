# 버블 정렬

```rust
fn bubble_sort(arr : &mut Vec<i32>){
    let mut flag = false;
    let size = arr.len();
    for i in 0..size-1{
        for j in 0..(size -1 -i){
            if arr[j] > arr[j+1]{
                flag = true;
                (arr[j], arr[j+1]) = (arr[j+1], arr[j]);
            }
        }
        if !flag {break;}
    }
}

fn main(){
    let mut arr : Vec<i32> = vec![5, 2, 6, 3, 4, 7, 8, 9, 1];

    bubble_sort(&mut arr);
    print!("{:?}", arr);
}
```