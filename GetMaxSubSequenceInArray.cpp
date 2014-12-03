////normal way O(n^2)
int GetMaxSubSequence(int* arr,int len)
{
    int i, j;
    int curSum; 
    int maxSum; 
    
    maxSum = arr[0];

    for (i = 0; i < len; i++)
    {
        curSum = 0;

        for (j = i; j < len; j++)
        {
            curSum = curSum + arr[j];

            if (curSum > maxSum)
            {
                maxSum = curSum;
            }
        }
    }
        return maxSum;
}

////the effective way O(n)
int GetMaxSubSeq(int* arr,int len)
{
    if(arr==NULL || len < 0)
    {
    return -1;
    }

int index = 0;
int maxNum = arr[0];
for(int i = 0;i<len;i ++){
if(arr[i] < 0)
{
index++;
maxNum = maxNum > arr[i] ? maxNum:arr[i];
}
else
{
break;
}
}
if(index == len)
{
return maxNum;
}

int sum = 0;
int max = 0;
for(int i=0;i < len;i ++)
{
    sum += arr[i];
max=max<sum?sum :max;
sum=sum>0?sum:0;
}

return max;
}

////run it 
int _tmain(int argc, _TCHAR* argv[])
{
    int *arr = new int[100];
    arr[0]=1;
    arr[1]=-3;
    arr[2]=5;
    arr[3]=6;
    arr[4]=7;

    int maxSum = GetMaxSubSeq(arr,5);
    cout<<maxSum<<endl;

    delete[] arr;

cin.get();
    return 0;
}