<%@include file="/libs/foundation/global.jsp"%><%@page session="false"%>

<span class="offset" style="display: none;"><%=properties.get("Offset") %></span>
<span class="limit" style="display: none;"><%=properties.get("Limit") %></span>
<span class="path" style="display: none;"><%=(properties.get("SearchPath")==null || properties.get("SearchPath").equals(""))? "/content/lord-of-the-rings/en/middle-earth/" :properties.get("SearchPath") %></span>

<div class="jumbotron">
	<!-- ng-app="" -->

	<form class="form-group form-inline text-center" id="searchForm"
		action="#txtSearch" autocomplete="on">
		<center>
			<span class="hm" style="font-size: 15px; font-family: Segoe UI;"></span>
		</center>
		<br /> &nbsp; <br /> &nbsp;<br />
		<center>
			<span style="height: 40px;"> <input type="checkbox" id="check"
				class="check" style="width: 40px" /></span> <input type="search"
				id="txtSearch" class="form-control" style="width: 70%"
				placeholder="Enter the name of a character, species, or a place in Middle Earth..."
				value="<%=(request.getParameter("q") != null) ? request
					.getParameter("q") : ""%>">
			<!-- ng-model="word" ng-controller="pageController" -->

			&nbsp;
			<button type="submit" id="btnSearch" class="btn btn-info">
				<span class="glyphicon glyphicon-search"></span> Search
			</button>

			<!-- <div>
				<p ng-repeat="x in characters | filter:word"
					value="{{x.title}}">{{5+5}}</p>
			</div> -->
		</center>
	</form>
</div>





