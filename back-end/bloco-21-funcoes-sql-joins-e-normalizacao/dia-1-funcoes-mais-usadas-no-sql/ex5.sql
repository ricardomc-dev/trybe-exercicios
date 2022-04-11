SELECT MAX(SALARY) AS 'maior salario', 
	MIN(SALARY) AS 'menor salario',
    SUM(SALARY) AS 'soma salario',
	ROUND(AVG(SALARY),2) AS 'media salario'
FROM hr.employees;