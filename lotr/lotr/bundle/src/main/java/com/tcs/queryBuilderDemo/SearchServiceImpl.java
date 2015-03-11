package com.tcs.queryBuilderDemo;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.search.result.SearchResult;

@Component
@Service(value = SearchService.class)
public class SearchServiceImpl implements SearchService {

	@Reference
	QueryBuilder queryBuilder;

	private static final Logger LOGGER = LoggerFactory
			.getLogger(SearchServiceImpl.class);

	public JSONArray getResults(String inputQuery, String limit, String offset,
			String searchPath , Session session) {

		JSONArray jsonArray = new JSONArray();

		Map<String, String> map = new HashMap<String, String>();
		map.put("type", "cq:Page");
		map.put("path", searchPath);
		map.put("fulltext", inputQuery);
		map.put("p.offset", offset);
		map.put("p.limit", limit);
		
		Map<String, String> map1 = new HashMap<String, String>();
		map1.put("type", "cq:Page");
		map1.put("path", searchPath);
		map1.put("fulltext", inputQuery);
		map1.put("p.offset", "0");
		map1.put("p.limit", "-1");
		
		LOGGER.info("Inside the getResults Method");

		Query query = queryBuilder
				.createQuery(PredicateGroup.create(map), session);
		SearchResult result = query.getResult();
		List<Hit> results = result.getHits();
		Iterator<Hit> iterator = results.iterator();
		LOGGER.info("The Result Size is " + results.size());
		
		Query query1 = queryBuilder
				.createQuery(PredicateGroup.create(map1), session);
		SearchResult result1 = query1.getResult();
		List<Hit> results1 = result1.getHits();
		Iterator<Hit> iterator1 = results1.iterator();
		LOGGER.info("The Result Size is " + results1.size());
		
		

		while (iterator.hasNext()) {

			Hit singleHit = iterator.next();
			JSONObject jsonObject = new JSONObject();
			try {
				jsonObject.put("title", singleHit.getTitle());
				jsonObject.put("path", singleHit.getPath());
				jsonObject.put("offset", offset);
				jsonObject.put("limit", limit);
				jsonObject.put("total", results1.size());

				jsonArray.put(jsonObject);
			} catch (JSONException e) {
				LOGGER.error("Error in JSON " + e.getMessage());
			} catch (RepositoryException e) {
				LOGGER.error("Error in Repository Access " + e.getMessage());
			}
			
		}
		
		LOGGER.info("Search JSON Array" + jsonArray.toString());
		return jsonArray;

	}

}
