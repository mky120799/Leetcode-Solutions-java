# Write your MySQL query statement below

select max(salary) SecondHighestSalary from employee where salary < ( select salary from employee  order by salary desc limit 1) 