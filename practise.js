// *-------------------- practise 1-----------------------------


let g_parent=document.querySelector('.grandparent')
let parent=document.querySelector('.parent')
let child=document.querySelector('.child')
let g_child=document.querySelector('.grandchild')

function gp(){
    console.log('Grand Parent');
}

g_parent.addEventListener('click',gp)

function p(){
    console.log('Parent');
}

parent.addEventListener('click',p)

function c(){
    console.log('Child');
}

child.addEventListener('click',c)

function gc(){
    console.log('Grand Child');
}

g_child.addEventListener('click',gc)


// *-------------------- practise 1--------------------------------


