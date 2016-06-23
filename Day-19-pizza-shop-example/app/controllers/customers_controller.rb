class CustomersController < ApplicationController

    #READ
    def index
        # @customers = Customer.all
        @customers = Customer.where(name: params[:name]) unless params[:name].blank?
        if @customers.blank?
            @customers = Customer.all
            # redirect_to new_customer_path, notice: "customer #{params[:name]} not found. Add them?"
        end
        # @customers = Customer.where(name: "Jon")
    end
    def show
        @customer = Customer.find(params[:id])
        # @orders = Order.where(customer_id: @customer.id)
        # @customer = Customer.find_by(name: params[:id])
        redirect_to customers_path if @customer.blank?
    end

    #CREATE
    def new
        @customer = Customer.new
    end
    def create
        customer_params = params.require(:customer).permit(:name, :email, :address)
        @customer = Customer.new(customer_params)

        if @customer.save
            # redirect_to "/customers/#{@customer.id}", notice: 'customer was successfully created.'
            # redirect_to customer_path(id: @customer.name), notice: 'customer was successfully created.'
            # redirect_to customer_path(@customer), notice: 'customer was successfully created.'
            redirect_to @customer, notice: 'customer was successfully created.'
        else
            render :new
        end
    end
    #UPDATE
    def edit
        @customer = Customer.find(params[:id])
    end
    def update
        customer_params = params.require(:customer).permit(:name, :email, :address)

        @customer = Customer.find(params[:id])

        if @customer.update(customer_params)
            redirect_to @customer, notice: 'customer was successfully updated.'
        else
            render :edit
        end
    end
    #DELETE
    def destroy
        customer = Customer.find(params[:id])
        customer.destroy
        redirect_to customers_path, notice: 'customer deleted'
    end

end
