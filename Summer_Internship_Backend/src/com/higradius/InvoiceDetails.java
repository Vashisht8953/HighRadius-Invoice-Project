package com.higradius;

public class InvoiceDetails {
//	private String business_code;
	private String name_customer;
	private String cust_number;
	private String clear_date;
//	private int business_year;
	private Long doc_id;
//	private String posting_date;
//	private String document_create_date;
	private float total_open_amount;
	private String due_in_date;
//	private String invoice_currency;
//	private String document_type;
//	private int posting_id;
//	private String baseline_create_date;
//	private String cust_payment_terms;
//	private Long invoice_id;
//	private int isOpen;
	private String notes;
//	
//	public String getBusinessCode() {
//		return business_code;
//	}
//	public void setBusinessCode(String business_code) {
//		this.business_code = business_code;
//	}
	
	public String getCustNumber() {
		return cust_number;
	}
	public void setCustNumber(String cust_number) {
		this.cust_number = cust_number;
	}
	
	public String getNameCustomer() {
		return name_customer;
	}
	public void setNameCustomer(String name_customer) {
		this.name_customer = name_customer;
	}
	
	public String getClearDate() {
		return clear_date;
	}
	public void setClearDate(String clear_date) {
		this.clear_date = clear_date;
	}
	
//	public int getBusinessYear() {
//		return business_year;
//	}
//	public void setBusinessYear(int business_year) {
//		this.business_year = business_year;
//	}
	
	public Long getDocID() {
		return doc_id;
	}
	public void setDocID(Long doc_id) {
		this.doc_id = doc_id;
	}
	
//	public String getPostingDate() {
//		return posting_date;
//	}
//	public void setPostingDate(String posting_date) {
//		this.posting_date = posting_date;
//	}
//	
//	public String getDocumentCreateDate() {
//		return document_create_date;
//	}
//	public void setDocumentCreateDate(String document_create_date) {
//		this.document_create_date = document_create_date;
//	}
	
	public String getDueInDate() {
		return due_in_date;
	}
	public void setDueInDate(String due_in_date) {
		this.due_in_date = due_in_date;
	}
	
//	public String getInvoiceCurrency() {
//		return invoice_currency;
//	}
//	public void setInvoiceCurrency(String invoice_currency) {
//		this.invoice_currency = invoice_currency;
//	}
//	
//	public String getDocumentType() {
//		return document_type;
//	}
//	public void setDocumentType(String document_type) {
//		this.document_type = document_type;
//	}
//	
//	public int getPostingID() {
//		return posting_id;
//	}
//	public void setPostingID(int posting_id) {
//		this.posting_id = posting_id;
//	}
	
	public float getTotalOpenAmount() {
		return total_open_amount;
	}
	public void setTotalOpenAmount(float total_open_amount) {
		this.total_open_amount = total_open_amount;
	}
	
//	public String getBaselineCreateDate() {
//		return baseline_create_date;
//	}
//	public void setBaselineCreateDate(String baseline_create_date) {
//		this.baseline_create_date = baseline_create_date;
//	}
//	
//	public String getCustPaymentTerms() {
//		return cust_payment_terms;
//	}
//	public void setCustPaymentTerms(String cust_payment_terms) {
//		this.cust_payment_terms = cust_payment_terms;
//	}
//	
//	public Long getInvoiceID() {
//		return invoice_id;
//	}
//	public void setInvoiceID(Long invoice_id) {
//		this.invoice_id = invoice_id;
//	}
//	
//	public int getIsOpen() {
//		return isOpen;
//	}
//	public void setIsOpen(int isOpen) {
//		this.isOpen = isOpen;
//	}
	
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	
//	public String toString() {
//		String res = business_code + ", " + cust_number + ", " + name_customer + ", " + clear_date + ", " + business_year + ", " + doc_id + ", " + posting_date + ", " + document_create_date + ", " + due_in_date + ", " + invoice_currency + ", " + document_type + ", " + posting_id + ", " + total_open_amount + ", " + baseline_create_date + ", " + cust_payment_terms + ", " + invoice_id + ", " + isOpen + "\n";
//		
//		return res;
//	}
}
