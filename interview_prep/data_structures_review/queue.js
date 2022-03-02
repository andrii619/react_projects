

import { LinkedList } from "./LinkedList";




class Queue {

    constructor()
    {
        this.queue = new LinkedList();
    }

    enqueue(item)
    {
        // add to the end of linked list
        this.queue.append(item);
    }

    dequeue()
    {
        // remove from the beginning of linked list
        return this.queue.removeFirst();
    }

}






