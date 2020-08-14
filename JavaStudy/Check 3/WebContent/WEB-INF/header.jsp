<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.util.*,java.text.SimpleDateFormat"%>
<%
    Calendar cal = Calendar.getInstance();
    cal.set(2020, 7, 14);
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
    String f_date = sdf.format(cal.getTime());
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ヘッダー</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<header>
		<div class="login">Login</div>
	 	<label> <%=f_date%> </label>
	</header>
</body>
</html>