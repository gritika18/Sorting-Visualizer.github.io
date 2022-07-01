import BubbleSort from '../algorithms/BubbleSort'; 
import MergeSort from '../algorithms/MergeSort';
import QuickSort from '../algorithms/QuickSort';
import InsertionSort from '../algorithms/InsertionSort';
import SelectionSort from '../algorithms/SelectionSort';

import image1 from '../assets/images/bubble_sort_image.png';
import image2 from '../assets/images/insertion_sort_image.png';
import image3 from '../assets/images/Merge_Sort_image.png';
import image4 from '../assets/images/Quicksort_image.png';
import image5 from '../assets/images/selection_sort_image.png';

let AlgorithmData = {
    'Bubble Sort' : {
        component : BubbleSort,
        definition : 'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
        working : ['Starting from the first index, compare the first and the second elements.',
                   'If the first element is greater than the second element, they are swapped.', 
                   'Now, compare the second and the third elements. Swap them if they are not in order.', 
                   'The above process goes on until the last element.'],
        steps : ['Starting from the first index, compare the first and the second elements.',
                'If the first element is greater than the second element, they are swapped.', 
                'Now, compare the second and the third elements. Swap them if they are not in order.', 
                'The above process goes on until the last element.'],
        image : image1
    },
    'Insertion Sort' : {
        component : InsertionSort,
        definition : 'Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration. Insertion sort works similarly as we sort cards in our hand in a card game. We assume that the first card is already sorted then, we select an unsorted card.',
        working : ['Starting from the first index, compare the first and the second elements.',
                   'If the first element is greater than the second element, they are swapped.', 
                   'Now, compare the second and the third elements. Swap them if they are not in order.', 
                   'The above process goes on until the last element.'],
        steps : ['Starting from the first index, compare the first and the second elements.',
                'If the first element is greater than the second element, they are swapped.', 
                'Now, compare the second and the third elements. Swap them if they are not in order.', 
                'The above process goes on until the last element.'],
        image : image2
    },
    'Merge Sort' : {
        component : MergeSort,
        definition : 'Merge Sort is a divide and conquer algorithm. It works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.',
        working : ['Starting from the first index, compare the first and the second elements.',
                   'If the first element is greater than the second element, they are swapped.', 
                   'Now, compare the second and the third elements. Swap them if they are not in order.', 
                   'The above process goes on until the last element.'],
        steps : ['Starting from the first index, compare the first and the second elements.',
                'If the first element is greater than the second element, they are swapped.', 
                'Now, compare the second and the third elements. Swap them if they are not in order.', 
                'The above process goes on until the last element.'],
        image : image3
    },
    'Quick Sort' : {
        component : QuickSort,
        definition : 'The quicksort algorithm is a sorting algorithm that works by selecting a pivot point, and thereafter partitioning the number set, or array, around the pivot point. ',
        working : ['Starting from the first index, compare the first and the second elements.',
                   'If the first element is greater than the second element, they are swapped.', 
                   'Now, compare the second and the third elements. Swap them if they are not in order.', 
                   'The above process goes on until the last element.'],
        steps : ['Starting from the first index, compare the first and the second elements.',
                'If the first element is greater than the second element, they are swapped.', 
                'Now, compare the second and the third elements. Swap them if they are not in order.', 
                'The above process goes on until the last element.'],
        image : image4
    },
    'Selection Sort' : {
        component : SelectionSort,
        definition : 'Selection sort works by taking the smallest element in an unsorted array and bringing it to the front. You will go through each item (from left to right) until you find the smallest one. The first item in the array is now sorted, while the rest of the array is unsorted.',
        working : ['Starting from the first index, compare the first and the second elements.',
                   'If the first element is greater than the second element, they are swapped.', 
                   'Now, compare the second and the third elements. Swap them if they are not in order.', 
                   'The above process goes on until the last element.'],
        steps : ['Starting from the first index, compare the first and the second elements.',
                'If the first element is greater than the second element, they are swapped.', 
                'Now, compare the second and the third elements. Swap them if they are not in order.', 
                'The above process goes on until the last element.'],
        image : image5
    }
}

export default AlgorithmData;