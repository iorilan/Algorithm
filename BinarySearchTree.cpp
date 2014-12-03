/////////////////Tnode.h////////////////
class TNode
{
public:
    ////methods
    TNode(void);
    TNode(int data);
    ~TNode(void);

    /////members
    TNode* left;
    TNode* right;
    int data;
};

/////////TNode.cpp/////////////
TNode::TNode(void)
{
    TNode::data=0;
    TNode::left=NULL;
    TNode::right=NULL;
}

TNode::TNode(int data)
{
    TNode::data = data;
    TNode::left=NULL;
    TNode::right=NULL;
}

TNode::~TNode(void)
{
}

//////////////////////end//////////////////

/////////////////BTree.h//////////////////

class BTree{
public:
    ////methods
    void InsertNode(TNode* node);
    void PrintNode(TNode* head);
    TNode* FindValue(TNode* head,int value);
    TNode* Find(TNode* head,TNode* node);
    bool IsEmpty(TNode* head);
    ////members
    TNode* head;

};

//////////////////BTree.cpp////////////////


#include "stdafx.h"
#include "Node.h"
#include <iostream>


void BTree::InsertNode(TNode *node){
    if(this->IsEmpty(node)){
    return;
    }

TNode* current = this->head;
while(current!=NULL){
if(node->data < current->data){
    if(current->left != NULL){
    current=current->left;
    }
    else{
    current->left = new TNode(node->data);
    break;
    }
}
else{
    //current=current->right;
if(current->right != NULL){
    //current->left = new TNode(77);
    current=current->right;
    }
    else{
    current->right = new TNode(node->data);
    break;
    }
}
}

}

bool BTree::IsEmpty(TNode* head){
return head==NULL;
}

void BTree::PrintNode(TNode *currentNode){
    using namespace std;
    if(currentNode != NULL)
    {
    this->PrintNode(currentNode->left);
    cout<<currentNode->data<<"  ";

    this->PrintNode(currentNode->right);
    }
}

TNode* BTree::FindValue(TNode* current,int value){

    while(current!=NULL){
    if(current->data == value){
    return current;
    }
    else if(current->data < value){
    current = current->right;
    }
    else{
    current=current->left;
    }
    }
return NULL;


}

TNode* BTree::Find(TNode* current,TNode* node){
return this->FindValue(current,node->data);
}