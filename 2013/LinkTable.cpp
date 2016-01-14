
class Node
{
public:
    ////methods
    Node(void);
    Node(int data);
    ~Node(void);

    /////members
    Node* next;
    int data;
};

class MyLinkStack{
public:
    ////mothods
    void Push(Node* node,Node* top);
    Node* Pop(Node* top);
    bool IsEmpty(Node* top);
    void PrintStack(Node* top);

    ////members
    Node* top;
};
/////////////////////////END//////////////////////////////


/////////node methods/////////////
Node::Node(void)
{
    Node::data=0;
    Node::next=NULL;
}

Node::Node(int data)
{
    Node::data = data;
    Node::next=NULL;
}

Node::~Node(void)
{
}

//////////////////////end//////////////////

//////////MyLinkStack Methods/////////

void MyLinkStack::Push(Node* node,Node* top){
    if(this->IsEmpty(top))
    {
        return;
    }
node->next = top;
this->top = node;
}

Node* MyLinkStack::Pop(Node* top){
    if(this->IsEmpty(top))
    {
        return NULL;
    }

Node* tmp = top;
top=top->next;
MyLinkStack::top = top;
return tmp;
}

bool MyLinkStack::IsEmpty(Node* top){
return top==NULL;
}

void MyLinkStack::PrintStack(Node* top){
if(this->IsEmpty(top))
    {
        return;
    }

for(Node* tmp=this->top;tmp != NULL;tmp=tmp->next)
{
    std::cout<<tmp->data<<" ";
}
}
///////////////end////////////////////
