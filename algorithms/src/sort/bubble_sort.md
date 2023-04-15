<<<<<<< HEAD
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
=======
# 거품 정렬

```rust
let mut test = [2, 6, 3, 4, 9, 5, 7, 1];

fn bubble_sort(arr : &mut [i32]){
    let mut flag = false;
    let mut swap = 0; // test
    for i in 0..arr.len()-1 {
        for j in 0..arr.len() - 1 - i {
            if arr[j] > arr[j+1] {
                flag = true;
                (arr[j], arr[j+1]) = (arr[j+1], arr[j]);
                swap += 1;
            }
        }

        if !flag{
            break;
        }
    }

    println!("swap : {:?}", swap);
}

bubble_sort(&mut test);
print!("{:?}", test);
>>>>>>> 17e44aa0a19801a7a719c0061cefd10b69d75391
