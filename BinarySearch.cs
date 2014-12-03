public int FindPosition(int num, int[] arr)
        {
            int left = 0;
            int right = arr.Length - 1;


            while (left < right - 1)
            {
                if (arr[left] == num)
                {
                    return left;
                }
                if (arr[right] == num)
                {
                    return right;
                }


                int middle = (left + right) / 2;
                if (num == arr[middle])
                {
                    return middle;
                }
                else if (num < arr[middle])
                {
                    right = middle;
                }
                else
                {
                    left = middle;
                }


            }
            return -1;
        }