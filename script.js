const details = [
  // Your data array containing details objects
  {
    heading: "Time Complexity",
    image: `images/time_complexity.jpeg`,
    link: "templates/time_complexity.html",
    sub_topics: ["Big Oh", "Big Omega", "Big Theta"],
  },
  {
    heading: "Array",
    image: `https://www.simplilearn.com/ice9/free_resources_article_thumb/Vaibhav-Arrays%20Article/Arrays_in_ds-what-is-array-img1.PNG`,
    link: "templates/array.html",
    sub_topics: [
      "create",
      "insert",
      "delete",
      "linear search",
      "prefix sum",
      "kadane",
      "sliding windows",
      "partitioning",
      "rain water trapping",
    ],
  },
  {
    heading: "Number Theory",
    image: `https://media.geeksforgeeks.org/wp-content/uploads/20231005172352/Screenshot-from-2023-10-04-17-19-31-min.png`,
    link: "templates/number_theory.html",
    sub_topics: [
      "gcd",
      "Extended Eucledian",
      "Sieve of Eratosthenes",
      "Binary Exponentiation",
    ],
  },
  {
    heading: "Stack",
    image: `https://static.studytonight.com/data-structures/images/stack-data-structure.png`,
    link: "templates/stack.html",
    sub_topics: [
      "create",
      "push",
      "pop",
      "peek",
      "Balanced bracket",
      "infix to postfix",
      "infix to prefix",
      "postfix evaluation",
      "prefix evaluation",
      "Max Area under histogram",
      "Min Stack O(1)",
    ],
  },
  {
    heading: "Matrix",
    image: `https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/order-of-the-matrix-1626676999.png`,
    link: "templates/matrix.html",
    sub_topics: [
      "Transpose",
      "Sparse Matrix",
      "kadane 2d",
      "Sorted Matrix search",
    ],
  },
  {
    heading: "Queue",
    image:
      "https://getnave.com/blog/wp-content/uploads/2021/09/queue-states-in-kanban.png",
    link: "templates/queue.html",
    sub_topics: ["create", "enqueue", "dequeue", "bfs"],
  },
  {
    heading: "Heap",
    image:
      "https://afteracademy.com/images/introduction-to-heaps-in-data-structures-banner-25b069a115d4b09e.png",
    link: "templates/heap.html",
    sub_topics: ["create", "delete", "insert", "heapify", "heap sort"],
  },
  {
    heading: "Linked List",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20220712172013/Singlelinkedlist.png",
    link: "templates/linkedlist.html",
    sub_topics: ["singly", "doubly", "circular", "stack", "queue"],
  },
  {
    heading: "Recursion",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Recursive-Functions-in-c.png",
    link: "templates/recursion.html",
    sub_topics: ["factorial", "H tree", "snowflakes", "Tower Of Brahma"],
  },
  {
    heading: "Binar Search Tree",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221215114732/bst-21.png",
    link: "templates/tree.html",
    sub_topics: [
      "create",
      "insert",
      "delete",
      "find",
      "traversal",
      //                          	"rotations"
    ],
  },
  {
    heading: "Binary Search Algorithm",
    image:
      "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F5hsod7t93v85b23rk671.png",
    link: "templates/search.html",
    sub_topics: [
      "binary search",
      "start point in roated array",
      "find peak element",
      //                          	"minmum page allocation",
      "biotonic array",
    ],
  },
  {
    heading: "Backtracking",
    image:
      "https://static.javatpoint.com/tutorial/daa/images/backtracking4.png",
    link: "templates/backtracking.html",
    sub_topics: ["N Queens", "maze", "sudoku", "knight tour", "graph coloring"],
  },
  {
    heading: "Sort Algorithms",
    image:
      "https://cdn1.byjus.com/wp-content/uploads/2022/06/example-of-sorting-algorithm.png",
    link: "templates/sort.html",
    sub_topics: [
      "bubble",
      "selection",
      "insertion",
      "merge",
      "quick",
      // "radix",
      "heap",
      "shell",
      "counting",
    ],
  },
  {
    heading: "Divide And Conquer",
    image:
      "https://www.tutorialspoint.com/data_structures_algorithms/images/divide_and_conquer_approach.jpg",
    link: "templates/divide_and_conquer.html",
    sub_topics: ["merge sort", "quick sort", "counting inversion"],
  },
  {
    heading: "String",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*EEmpU5oXP-iLual-5u9aFA.png",
    link: "templates/string.html",
    sub_topics: [
      "Naive",
      "KMP",
      "Rabin Karp",
      //                          "Boyer Moore",
      "Z Function",
    ],
  },
  {
    heading: "Greedy",
    image:
      "https://static.javatpoint.com/tutorial/daa/images/greedy-algorithm.png",
    link: "templates/greedy.html",
    sub_topics: [
      // "prims",
      "kruskals",
      "fractional knapsack",
      "Merge Intervals",
      "counting money",
      "huffman coding",
    ],
  },
  {
    heading: "Dynamic Programming",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240319104901/dynamic-programming.webp",
    link: "templates/dynamic.html",
    sub_topics: [
      "Travelling Salesman",
      "0/1 knapsack",
      "unbounded Knapsack",
      "subset sum problem",
      "cutting_rod",
      "coin_change_making",
      "longest_common_sequence",
      // "matrix chain multipication",
      "levenshtein distance",
      "ladder",
    ],
  },
  {
    heading: "Graph",
    image:
      "https://www.boardinfinity.com/blog/content/images/2023/01/Graphs-in-DSA.png",
    link: "templates/graph.html",
    sub_topics: [
      "create",
      "dfs",
      "bfs",
      "kruskals",
      //  "prims",
      "dfs maze",
      "djstras",
      "flood fill",
      "color filling",
      "topological sorting",
      "detect cycle",
      //  "bellman ford",
      //  "floyd warshall",
      "graph coloring",
      //  "snake and ladders",
      "travelling salesman",
      //  "ford fulkerson",
      //  "tarjons",
      "bridges",
      // "kosarajus ",
      //  "Articulation points",
      //  "dinics"
    ],
  },

  //  // Extras

  {
    heading: "Disjoint Set",
    image: "https://cdn1.byjus.com/wp-content/uploads/2019/09/disjoint-set.png",
    link: "templates/disjoint.html",
    sub_topics: ["find", "union"],
  },
  {
    heading: "Hashing Table",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*l9eCykFTYwvLZgy62id5Ag.png",
    link: "templates/hashing_table.html",
    sub_topics: ["open hashing", "closed hashing"],
  },

  {
    heading: "Non-deterministic Polynomial time",
    image: `https://media.geeksforgeeks.org/wp-content/uploads/20230828114559/np-complete-complexity-classes.png`,
    link: "templates/np_hard.html",
    sub_topics: ["p", "np", "np hard", "np complete"],
  },

  //                {
  //                     heading: 'Segment Tree',
  //                     image: 'images/segment_tree.png',
  //                     link: 'templates/segment_tree.html',
  //                     sub_topics: [
  //                          "create",
  //                          "query",
  //                          "update"
  //                     ]
  //                },

  // Questions

  {
    heading: "Questions",
    image:
      "https://blog.slido.com/wp-content/uploads/2023/05/slido-blog-cover-1600x1066px-3-1200x800.jpg",
    link: "templates/questions.html",
    sub_topics: ["Data Structure", "Algorithm"],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.querySelector(".card-container");

  details.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img src="${item.image}" alt="${item.heading}">
            <h3>${item.heading}</h3>
        `;
    card.addEventListener("click", () => {
      window.location.href = item.link;
    });
    cardContainer.appendChild(card);
  });
});
