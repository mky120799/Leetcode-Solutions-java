class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
               int L=m;
        
               int R=n;
           
               int aux[]=new int[m+n];
        
               int r=0;
        
               int l=0;
        
               int index=0;
        
               while( l<=L-1 && r<=R-1){
                   if(nums1[l]<=nums2[r])
                   
                       aux[index++]=nums1[l++];
                   
                    else
                        
                        aux[index++]=nums2[r++];
                    
                   
               }
              
                   while(l<=L-1)
                   {
                       aux[index++]=nums1[l++];
                   }
               
        
                   while(r<=R-1)
                   {
                         aux[index++]=nums2[r++];
                   }
                   
          for(int i=0;i<m+n;i++)
          {
             nums1[i]=aux[i];
          }
              
        return ;
    }
}