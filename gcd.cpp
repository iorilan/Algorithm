int God(int M,int N)
{
int rem ;
while(N > 0)
{
rem=M%N;
M=N;
N=rem;
}
return M;
}

int _tmain(int argc, _TCHAR* argv[])
{
    int rlt = God(360,60);
    cout<<rlt<<endl;
cin.get();
    return 0;
}