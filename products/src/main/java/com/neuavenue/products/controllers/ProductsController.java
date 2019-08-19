/**
 * 
 */
package com.neuavenue.products.controllers;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * @author BillyLee-laptop
 *
 */

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

//import org.json.CDL;
//import org.json.JSONArray;
//import org.json.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.junit.Test;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SequenceWriter;
import com.neuavenue.products.model.Product;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class ProductsController {
	
	private List<Product> Products = createList();
	private List<Product> ListProducts;
	
	
	private final static String english_description = "english_description";
	private final static String french_description = "french_description";
	private final static String brand_name_english = "brand_name_english";
	private final static String brand_name_french = "brand_name_french";
	private final static String type = "type";
	private final static String identification = "identification";
	private final static String img_url = "img_url";
	private final static String status = "status";
	
	//create new instant object
	//private static  JSONArray productList ;
	private static List<JSONObject> productJsonList;
	private static List<JSONObject> productJSONObject;

	@RequestMapping(value = "/Products", 
					method = RequestMethod.GET, 
					produces = "application/json")
	public List<Product> firstPage() {
		ListProducts =  readListProducts();
		/**
		try {
			ListProducts = createListProducts();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
		return Products;
	}
	
	@PostMapping
	public Product create(@RequestBody Product product) {
		product.toString();
		Products.add(product);
		
		appendJSON(product);
		
		
		/**
		System.out.println("creating product === \n " + Products);
		System.out.println(brand_name_english + " === \n " + product.getBrand_name_english());
		System.out.println(brand_name_french + " === \n " + product.getBrand_name_french());
		System.out.println(english_description + " === \n " + product.getEnglish_description());
		System.out.println(french_description + " === \n " + product.getFrench_description());
		System.out.println(identification + " === \n " + product.getIdentification());
		System.out.println(img_url + " === \n " + product.getImg_url());
		System.out.println(status + " === \n " + product.getStatus());
		System.out.println(type + " === \n " + product.getType());
		*/
		return product;
	}
	
	
	private static void appendJSON(Product product) {

		
		try {
	        File file = new File("products.json");
	        FileWriter fileWriter = new FileWriter(file, true);

	        ObjectMapper mapper = new ObjectMapper();
	        
	        SequenceWriter seqWriter = mapper.writer().writeValuesAsArray(fileWriter);

	        
	        seqWriter.write(new Product(product.getEnglish_description(),
	        							product.getFrench_description(),
	        							product.getBrand_name_english(),
	        							product.getBrand_name_french(),
	        							product.getType(),
	        							product.getIdentification(),
	        							product.getImg_url(),
	        							product.getStatus()
	        		));
	        seqWriter.close();
	    } catch (IOException e) {
	        e.printStackTrace();
	    }
	}
	
	
	private static List<Product> readListProducts(){
		List<Product> arrayListProducts = new ArrayList<Product>();
		
		JSONParser jsonParser = new JSONParser();
        
		JSONArray productList;
		
        try (FileReader reader = new FileReader("products.json"))
        {
            //Read JSON file
            Object obj = jsonParser.parse(reader);
 
            productList = (JSONArray) obj;
            System.out.println(productList);
            
            //Iterate over employee array
            productList.forEach( product -> parseProductObject( (JSONObject) product ) );
 
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
				
		return arrayListProducts;		
	}
	
	private static void parseProductObject(JSONObject product) 
    {
        //Get product object within list
        JSONObject productObject = (JSONObject) product.get("product");
         
        //Get product identification
        String id = (String) productObject.get(identification);    
        System.out.println("identification : "+ id );
         
        //Get employee brand_name_english
        String brandNameEnglish = (String) productObject.get(brand_name_english);  
        System.out.println("brand_name_english : "+ brandNameEnglish);
         
        //Get employee brand_name_french
        String brandNameFrench = (String) productObject.get(brand_name_french);    
        System.out.println("brand_name_french : "+ brandNameFrench);
        
      //Get employee english_description
        String englishDescription = (String) productObject.get(english_description);    
        System.out.println("english_description : "+ englishDescription);
        
      //Get employee brand_name_french
        String typeProduct = (String) productObject.get(type);    
        System.out.println("type : "+ typeProduct);
        
      //Get employee brand_name_french
        String st = (String) productObject.get(status);    
        System.out.println("status : "+ st);
        
    }
	
	/**
	private static void createJsonArray() {
		
		JSONArray ja = new JSONArray();
		
		ja.put(english_description);
		ja.put(french_description);
		ja.put(brand_name_english);
		ja.put(brand_name_french);
		ja.put(type);
		ja.put(identification);
		ja.put(img_url);
		ja.put(status);
		
		String string = 
				
				  "ED_AIER, FD_AIER, BNE_AIER, BNF_AIER, AIER01, AIER1009, AIER1009.png, st01 \n" +
				  "ED_PIER, FD_PIER, BNE_PIER, BNF_PIER, PIER01, PIER1009, PIER1009.png, st02 \n" +
				  "ED_HIER, FD_HIER, BNE_HIER, BNF_HIER, HIER01, HIER1009, HIER1009.png, st01 \n";
				  
		JSONArray result = CDL.toJSONArray(ja, string);
		
		System.out.println(result);
		
	}
	*/
	
	
/**
	private static List<Product> createListProducts() throws ParseException{
		System.out.println("createListProducts ====== ");
		
		
		JSONParser parser = new JSONParser();
		Object obj;
		
		try (FileWriter file = new FileWriter("Product.json")) {
			
			file.write(mainObject.toJSONString());
			
			System.out.println("Successfully Copied JSON Object to File...");
			System.out.println("\nJSON Object: " + mainObject);
			
			
			/**
			
			  obj = parser.parse(new FileReader("Product.json"));
			
			JSONObject jsonObject = (JSONObject) obj;
			JSONArray jsonArray = (JSONArray) jsonObject.get("Data_0000");
			
			
			Iterator<Object> iterator = jsonArray.iterator();
	        while (iterator.hasNext()) {
	            System.out.println("if iterator have next element " + iterator.next());
	        }
			
	        JSONArray jsonArray = (JSONArray) obj;
	        int length = jsonArray.size();
			
	        LinkedList author = new LinkedList();


	        for (int i =0; i< length; i++) {
	            JSONObject jsonObject = (JSONObject) jsonArray.get(i);
	            Set s = jsonObject.entrySet();
	            Iterator iter = s.iterator();

	            HashMap hm = new HashMap();

	            while(iter.hasNext()){
	                Map.Entry me = (Map.Entry) iter.next();
	                hm.put(me.getKey(), me.getValue());
	            }
	            
	            author.add(hm);             
	        }
	        
	        
	        for(int i=0;i<author.size();i++){
		       HashMap hm = (HashMap) author.get(i);
		       Set s = hm.entrySet();
		       Iterator iter = s.iterator();
		       while(iter.hasNext()){
		           Map.Entry me = (Map.Entry) iter.next();
		          System.out.println(me.getKey() + "---" + me.getValue());
	          }   
	        }
			*/
		//} catch (IOException e1) {
			// TODO Auto-generated catch block
		//	e1.printStackTrace();
		//}
		
	/**
		try {
			 
            Object obj = parser.parse(new FileReader(
                    "Product.json"));
 
            JSONObject jsonObject = (JSONObject) obj;
 
            String brand_name_english = (String) jsonObject.get("brand_name_english");
            String identification = (String) jsonObject.get("identification");
            String english_description = (String) jsonObject.get("english_description");
            String brand_name_french = (String) jsonObject.get("brand_name_french");
            String type = (String) jsonObject.get("type");
            String french_description = (String) jsonObject.get("french_description");
            String status = (String) jsonObject.get("status");

            
            
            //JSONArray productList = (JSONArray) jsonObject.get("Product List");
 
            System.out.println("brand_name_english: " + brand_name_english);
            System.out.println("identification: " + identification);
            System.out.println("english_description: " + english_description);
            System.out.println("brand_name_french: " + brand_name_french);
            System.out.println("type: " + type);
            System.out.println("french_description: " + french_description);

            
            
            /**
             * if json file will be like
             * 
             * {
				    "Name": "crunchify.com",
				    "Author": "App Shah",
				    "Company List": [
				        "Compnay: eBay",
				        "Compnay: Paypal",
				        "Compnay: Google"
				    ]
				}
				
				and finally out put display like below
				
				Name: Crunchify.com
				Author: App Shah
				 
				Company List:
				Compnay: eBay
				Compnay: Paypal
				Compnay: Google
             */
            
            /**
            System.out.println("\n Product List:");
            Iterator<String> iterator = productList.iterator();
            
            while (iterator.hasNext()) {
                System.out.println(iterator.next());
            }
            */
		/**
        } catch (Exception e) {
            e.printStackTrace();
        }
		*/
		//return null;
	//}
	
	private static List<Product> createList() {
	
		List<Product> tempProducts = new ArrayList<Product>();
		
		  
		Product product01 = new Product("ED_AIER", "FD_AIER", "BNE_AIER", "BNF_AIER", "AIER01", "AIER1009", "AIER1009.png", "st01");
		Product product02 = new Product("ED_PIER", "FD_PIER", "BNE_PIER", "BNF_PIER", "PIER01", "PIER1009", "PIER1009.png", "st02");
		Product product03 = new Product("ED_HIER", "FD_HIER", "BNE_HIER", "BNF_HIER", "HIER01", "HIER1009", "HIER1009.png", "st02");
		
		/**
		product01.setBrand_name_english("");
		product01.setBrand_name_french("");
		product01.setEnglish_description("");
		product01.setFrench_description("");
		product01.setIdentification("");
		product01.setImg_url("");
		product01.setStatus("");
		product01.setType("");
		*/
		
		tempProducts.add(product01);
		tempProducts.add(product02);
		tempProducts.add(product03);
	
		for(Product s : tempProducts) 
			System.out.println(
					"product arraylist ========= \n " + 
					"english_description : "+  s.getEnglish_description() + "  \n " + 
					"french_description :  " + s.getFrench_description() + "  \n " +
					"brand_name_english :  " + s.getBrand_name_english() +"  \n " +
					"brand_name_french :  " + s.getBrand_name_french() +"  \n " +
					"type :  " + s.getType() +"  \n " +
					"identification :  " + s.getIdentification() +"  \n " +
					"img_url :  " + s.getImg_url() +"  \n " +
					"status :  " + s.getStatus() 
					
			);
		
		//tempProducts.add(emp2);
		
		// step 1. build a new json file
		
		try {
			writeJsonSimpleDemo("Product.json", tempProducts);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		
		
		return tempProducts;
		
	}
	
	
	
	public static void writeJsonSimpleDemo(String filename, 
			List<Product> listproduct) throws Exception {
		
		//productList = new JSONArray();
		productJsonList = new  ArrayList<JSONObject> (identification.length());
		
		//productList = new JSONArray();
				productJSONObject = new  ArrayList<JSONObject> (identification.length());
				
		for (int i = 0 ; i < listproduct.size() ; i++) {
			//sampleObject.put(listproduct.get(i),  )
			
			//product details JSONObject
			JSONObject productDetails  = new JSONObject(); 
			JSONObject productObject  = new JSONObject(); 
			
			productDetails.put(identification, listproduct.get(i).getIdentification());
			productDetails.put(english_description, listproduct.get(i).getEnglish_description());
			productDetails.put(french_description, listproduct.get(i).getFrench_description());
			productDetails.put(brand_name_english, listproduct.get(i).getBrand_name_english());
			productDetails.put(brand_name_french, listproduct.get(i).getBrand_name_french());
			productDetails.put(type, listproduct.get(i).getType());
			productDetails.put(status, listproduct.get(i).getStatus());
		    
			//productObject.put("product", productDetails );
			
		    //productJsonList.add(productObject);
			
			productJsonList.add(productDetails);
			
			System.out.println("=== productDetail === \n" + productDetails.toJSONString());
			
		}
		
		try (FileWriter file = new FileWriter("products.json")){
			file.write(productJsonList.toString());
			file.flush();
		} catch (IOException e) {
			e.printStackTrace();
		}
		/**
	    sampleObject.put("identification", "PR01");
	    sampleObject.put("english_description", "PR01");
	    sampleObject.put("french_description", "PR01");
	    sampleObject.put("brand_name_english", "IKEA");
	    sampleObject.put("brand_name_french", "IKUEA");
	    sampleObject.put("type", "TY01");
	    sampleObject.put("status", "GOOD");
	    */
	    /**
	    sampleObject.put("age", 35);

	    JSONArray messages = new JSONArray();
	    messages.add("Hey!");
	    messages.add("What's up?!");

	    sampleObject.put("messages", messages);
	    */
		
		/**
		mainObject.put("Products", outerObject);
	    Files.write(
	    		Paths.get(filename), 
	    		mainObject.toString().getBytes()
		);
		*/
	}
	
	/**
	@Test
	public void access_org_JsonArray() {
		
		JSONObject req = new JSONObject(join(loadStrings(Product.json),""));
		JSONObject locs = req.getJSONObject("locations");
		JSONArray recs = locs.getJSONArray("record");
		
	    //Given: array
	    JSONArray jsonArray = new JSONArray(Arrays.asList(new JSONObject(
	                    new HashMap() {{
	                        put("a", 100);
	                        put("b", 200);
	                    }}
	            ),
	            new JSONObject(
	                    new HashMap() {{
	                        put("a", 300);
	                        put("b", 400);
	                    }}
	            )));

	    //Then: convert to List<JSONObject>
	    List<JSONObject> jsonItems = IntStream.range(0, jsonArray.length())
	            .mapToObj(index -> (JSONObject) jsonArray.get(index))
	            .collect(Collectors.toList());

	    // you can access the array elements now
	    jsonItems.forEach(arrayElement -> System.out.println(arrayElement.get("a")));
	    // prints 100, 300
	}
	*/

}




