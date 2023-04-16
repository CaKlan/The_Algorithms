Object.assign(window.search, {"doc_urls":["index.html#introduction","sort/sort.html#정렬","sort/select_sort.html#선택-정렬-selection-sort","sort/bubble_sort.html#거품-정렬","sort/insertion_sort.html#삽입-정렬","sort/heap_sort.html#힙-정렬","sort/quick_sort.html#퀵-정렬","graph/graph.html#그래프","graph/bfs.html#bfs","graph/dfs.html#dfs","tree/tree.html#트리","tree/bfs.html#bfs","tree/dfs.html#dfs","chapter_1.html#chapter-1"],"index":{"documentStore":{"docInfo":{"0":{"body":1,"breadcrumbs":2,"title":1},"1":{"body":4,"breadcrumbs":0,"title":0},"10":{"body":0,"breadcrumbs":0,"title":0},"11":{"body":0,"breadcrumbs":2,"title":1},"12":{"body":0,"breadcrumbs":2,"title":1},"13":{"body":0,"breadcrumbs":4,"title":2},"2":{"body":39,"breadcrumbs":2,"title":2},"3":{"body":44,"breadcrumbs":0,"title":0},"4":{"body":37,"breadcrumbs":0,"title":0},"5":{"body":0,"breadcrumbs":0,"title":0},"6":{"body":91,"breadcrumbs":0,"title":0},"7":{"body":0,"breadcrumbs":0,"title":0},"8":{"body":0,"breadcrumbs":2,"title":1},"9":{"body":0,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"백준 문제를 풀다가 자주 반복 되는 알고리즘들을 구현 해보고 정리한 문서입니다. 백준 깃허브 : https://github.com/CaKlan/BaekJoon","breadcrumbs":"Introduction » Introduction","id":"0","title":"Introduction"},"1":{"body":"어쩌고 저쩌고 설명 이름 최소 최대 최악 메모리 안정 선택 정렬 \\(n^2\\) \\(n^2\\) \\(n^2\\) 1 아니오 거품 정렬 삽입 정렬 퀵 정렬 힙 정렬","breadcrumbs":"정렬 » 정렬","id":"1","title":"정렬"},"10":{"body":"","breadcrumbs":"트리 » 트리","id":"10","title":"트리"},"11":{"body":"","breadcrumbs":"트리 » BFS » BFS","id":"11","title":"BFS"},"12":{"body":"","breadcrumbs":"트리 » DFS » DFS","id":"12","title":"DFS"},"13":{"body":"","breadcrumbs":"Chapter 1 » Chapter 1","id":"13","title":"Chapter 1"},"2":{"body":"fn select_sort(arr : &mut Vec<i32>){ let mut swap = 0; // test for i in 0..arr.len(){ let mut min = i; for j in (i+1)..arr.len(){ if arr[min] >= arr[j]{ min = j; } } (arr[i], arr[min]) = (arr[min], arr[i]); swap += 1; } println!(\"swap : {:?}\", swap);\n} let mut test = vec![2, 6, 3, 4, 9, 5, 7, 1];\nselect_sort(&mut test);\nprint!(\"{:?}\", test);","breadcrumbs":"정렬 » 선택 정렬 » 선택 정렬 (Selection Sort)","id":"2","title":"선택 정렬 (Selection Sort)"},"3":{"body":"let mut test = [2, 6, 3, 4, 9, 5, 7, 1]; fn bubble_sort(arr : &mut [i32]){ let mut flag = false; let mut swap = 0; // test for i in 0..arr.len()-1 { for j in 0..arr.len() - 1 - i { if arr[j] > arr[j+1] { flag = true; (arr[j], arr[j+1]) = (arr[j+1], arr[j]); swap += 1; } } if !flag{ break; } } println!(\"swap : {:?}\", swap);\n} bubble_sort(&mut test);\nprint!(\"{:?}\", test);","breadcrumbs":"정렬 » 거품 정렬 » 거품 정렬","id":"3","title":"거품 정렬"},"4":{"body":"장점 안정적임 알고리즘이 간단함 단점 스왑이 많음 fn insert_sort(arr : &mut Vec<i32>){ let mut swap = 0; for i in 1..arr.len(){ for j in (1..=i).rev(){ if arr[j] < arr[j-1]{ (arr[j], arr[j-1]) = (arr[j-1], arr[j]); swap += 1; } } } println!(\"swap : {:?}\", swap);\n} let mut test = vec![2, 6, 3, 4, 9, 5, 7, 1];\ninsert_sort(&mut test);\nprint!(\"{:?}\", test);","breadcrumbs":"정렬 » 삽입 정렬 » 삽입 정렬","id":"4","title":"삽입 정렬"},"5":{"body":"","breadcrumbs":"정렬 » 힙 정렬 » 힙 정렬","id":"5","title":"힙 정렬"},"6":{"body":"let mut test = vec![5, 6, 3, 4, 9, 2, 7, 1]; let size = test.len();\nquick_sort(&mut test, 0 as isize, size as isize - 1);\nprintln!(\"{:?}\", test); fn partition(arr : &mut Vec<i32>, left : isize, right : isize) -> isize{ let mut low = left - 1; let mut high = right; let pivot = right as usize; loop { low += 1; while arr[low as usize] < arr[pivot] { low += 1; } high -= 1; while high >= 0 && arr[high as usize] > arr[pivot] { high -= 1; } if (low >= high){ break; } else{ arr.swap(low as usize, high as usize); } } arr.swap(low as usize, pivot as usize); return low;\n} fn quick_sort(arr : &mut Vec<i32>, left : isize, right : isize){ if left < right{ let p = partition(arr, left, right); quick_sort(arr, left, p-1); quick_sort(arr, p+1, right); }\n}","breadcrumbs":"정렬 » 퀵 정렬 » 퀵 정렬","id":"6","title":"퀵 정렬"},"7":{"body":"","breadcrumbs":"그래프 » 그래프","id":"7","title":"그래프"},"8":{"body":"","breadcrumbs":"그래프 » BFS » BFS","id":"8","title":"BFS"},"9":{"body":"","breadcrumbs":"그래프 » DFS » DFS","id":"9","title":"DFS"}},"length":14,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{".":{".":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"1":{".":{".":{"=":{"df":0,"docs":{},"i":{")":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":6,"docs":{"1":{"tf":1.0},"13":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":2.0},"4":{"tf":2.23606797749979},"6":{"tf":2.8284271247461903}}},"2":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}},"3":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"4":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"5":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}},"6":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"7":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"9":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"p":{"(":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"[":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"j":{"+":{"1":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.7320508075688772},"4":{"tf":2.449489742783178}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}}},"b":{"df":0,"docs":{},"f":{"df":2,"docs":{"11":{"tf":1.0},"8":{"tf":1.0}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"b":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"&":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"f":{"df":2,"docs":{"12":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"n":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":2.449489742783178}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"c":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"/":{"b":{"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"+":{"1":{")":{".":{".":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"&":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"6":{"tf":2.6457513110645907}}}}}},"j":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":2.449489742783178}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"w":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"u":{"df":0,"docs":{},"t":{"df":4,"docs":{"2":{"tf":2.0},"3":{"tf":2.0},"4":{"tf":1.7320508075688772},"6":{"tf":2.23606797749979}}}}},"n":{"^":{"2":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"p":{"+":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"(":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":1,"docs":{"6":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"p":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"&":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":2.6457513110645907}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"&":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"w":{"a":{"df":0,"docs":{},"p":{"df":3,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772},"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":4,"docs":{"2":{"tf":2.0},"3":{"tf":2.0},"4":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"6":{"tf":2.6457513110645907}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"!":{"[":{"2":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}},"5":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"<":{"df":0,"docs":{},"i":{"3":{"2":{"df":3,"docs":{"2":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"breadcrumbs":{"root":{"0":{".":{".":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"1":{".":{".":{"=":{"df":0,"docs":{},"i":{")":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":6,"docs":{"1":{"tf":1.0},"13":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951},"3":{"tf":2.0},"4":{"tf":2.23606797749979},"6":{"tf":2.8284271247461903}}},"2":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}},"3":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"4":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"5":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}},"6":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"7":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"9":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"p":{"(":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"[":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"j":{"+":{"1":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.7320508075688772},"4":{"tf":2.449489742783178}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}}},"b":{"df":0,"docs":{},"f":{"df":2,"docs":{"11":{"tf":1.7320508075688772},"8":{"tf":1.7320508075688772}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"b":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"&":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"f":{"df":2,"docs":{"12":{"tf":1.7320508075688772},"9":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"n":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":2.449489742783178}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"c":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"/":{"b":{"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"+":{"1":{")":{".":{".":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"&":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"6":{"tf":2.6457513110645907}}}}}},"j":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":2.449489742783178}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"w":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"u":{"df":0,"docs":{},"t":{"df":4,"docs":{"2":{"tf":2.0},"3":{"tf":2.0},"4":{"tf":1.7320508075688772},"6":{"tf":2.23606797749979}}}}},"n":{"^":{"2":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"p":{"+":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"(":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":1,"docs":{"6":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"p":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"&":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":2.6457513110645907}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"&":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"w":{"a":{"df":0,"docs":{},"p":{"df":3,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772},"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":4,"docs":{"2":{"tf":2.0},"3":{"tf":2.0},"4":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"6":{"tf":2.6457513110645907}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"!":{"[":{"2":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}},"5":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"<":{"df":0,"docs":{},"i":{"3":{"2":{"df":3,"docs":{"2":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"title":{"root":{"1":{"df":1,"docs":{"13":{"tf":1.0}}},"b":{"df":0,"docs":{},"f":{"df":2,"docs":{"11":{"tf":1.0},"8":{"tf":1.0}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"f":{"df":2,"docs":{"12":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});