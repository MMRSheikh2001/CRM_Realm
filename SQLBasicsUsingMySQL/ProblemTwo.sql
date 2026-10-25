

select 
sum(score>=80) as hot,
sum(score>=50 and score<80) as warm,
sum(score<50) as cold
from leads;
