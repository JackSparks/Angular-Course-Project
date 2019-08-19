/**
 * 
 */
package com.neuavenue.products.model;


/**
 * @author BillyLee-laptop
 *
 */

public class Product {
		
	private String english_description;
	private String french_description;
	private String brand_name_english;
	private String brand_name_french;
	private String type;
	private String identification;
	private String img_url;
	private String status;
	
	
	public Product(String english_description, String french_description, String brand_name_english,
			String brand_name_french, String type, String identification, String img_url, String status) {
		super();
		this.english_description = english_description;
		this.french_description = french_description;
		this.brand_name_english = brand_name_english;
		this.brand_name_french = brand_name_french;
		this.type = type;
		this.identification = identification;
		this.img_url = img_url;
		this.status = status;
	}
	/**
	 * @return the english_description
	 */
	public String getEnglish_description() {
		return english_description;
	}
	/**
	 * @param english_description the english_description to set
	 */
	public void setEnglish_description(String english_description) {
		this.english_description = english_description;
	}
	/**
	 * @return the french_description
	 */
	public String getFrench_description() {
		return french_description;
	}
	/**
	 * @param french_description the french_description to set
	 */
	public void setFrench_description(String french_description) {
		this.french_description = french_description;
	}
	/**
	 * @return the brand_name_english
	 */
	public String getBrand_name_english() {
		return brand_name_english;
	}
	/**
	 * @param brand_name_english the brand_name_english to set
	 */
	public void setBrand_name_english(String brand_name_english) {
		this.brand_name_english = brand_name_english;
	}
	/**
	 * @return the brand_name_french
	 */
	public String getBrand_name_french() {
		return brand_name_french;
	}
	/**
	 * @param brand_name_french the brand_name_french to set
	 */
	public void setBrand_name_french(String brand_name_french) {
		this.brand_name_french = brand_name_french;
	}
	/**
	 * @return the type
	 */
	public String getType() {
		return type;
	}
	/**
	 * @param type the type to set
	 */
	public void setType(String type) {
		this.type = type;
	}
	/**
	 * @return the identification
	 */
	public String getIdentification() {
		return identification;
	}
	/**
	 * @param identification the identification to set
	 */
	public void setIdentification(String identification) {
		this.identification = identification;
	}
	/**
	 * @return the img_url
	 */
	public String getImg_url() {
		return img_url;
	}
	/**
	 * @param img_url the img_url to set
	 */
	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}
	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}
	

	@Override
	public boolean equals(Object obj) {
		
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		
		
		Product other = (Product) obj;
		
		
		
		if (english_description == null) {
			if (other.english_description != null)
				return false;
		} else if (!french_description.equals(other.french_description))
			return false;
		if (brand_name_english == null) {
			if (other.brand_name_english != null)
				return false;
		} else if (!brand_name_french.equals(other.brand_name_french))
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!identification.equals(other.identification))
			return false;
		if (img_url == null) {
			if (other.img_url != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		
		return true;
		/**
		if (Double.doubleToLongBits(salary) != 
				Double.doubleToLongBits(other.salary))
			return false;
		return true;
		*/
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Product [english_description=" + english_description + ", french_description=" + french_description
				+ ", brand_name_english=" + brand_name_english + ", brand_name_french=" + brand_name_french + ", type="
				+ type + ", identification=" + identification + ", img_url=" + img_url + ", status=" + status + "]";
	}
	
	
}
