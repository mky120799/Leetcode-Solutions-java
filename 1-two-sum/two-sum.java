class Solution {
    public int[] twoSum(int[] nums, int target) {
        int res[]=new int[2];
        HashMap<Integer,Integer> hm=new HashMap<>();     
        for(int i=0;i<nums.length;i++)
        {
            int comple=target-nums[i];
            if(hm.containsKey(comple))
            {
                return new  int[] {hm.get(comple),i}; 
            }
            hm.put(nums[i],i);
        }  
       
        return res; 
   
   
  }
}