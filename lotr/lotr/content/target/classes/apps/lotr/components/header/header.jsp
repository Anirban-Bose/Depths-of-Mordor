<%--

  header component.

  

--%><%
%><%@include file="/libs/foundation/global.jsp"%>
<%@page session="false" %><%
%><%
	// TODO add you code here
%>
<title>
	LOTR | <%=currentPage.getTitle()%>
</title>
<cq:includeClientLib categories="bootstrap"/>

<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap-toggle.min.css" rel="stylesheet">
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap-toggle.min.js"></script>



<cq:includeClientLib categories="lotr-commons"/>
<div class="jumbotron img-rounded header" style="color:whitesmoke;">
    <h2>
      <!--   Lord of the Rings	 -->&nbsp;
    </h2>
    <i>
    <%--     <%=currentPage.getTitle()%> --%>&nbsp;
    </i>
</div>
