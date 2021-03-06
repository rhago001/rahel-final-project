class AppointmentsController < ApplicationController

  def index
    render json: Appointment.all.to_json
    
  end 
  def show
    appt=Appointment.find(params[:id])
    render json: appt

  end 

  def create
    appt = Appointment.create(appt_params)
    if appt.save
      render json: appt
    else
      render json: {error: "Error, unable to create appointment"}
    end 


  end 

  def update
    appt=Appointment.find(params[:id])
    appt.update(appt_params)
    respond_with appt, json: appt
  end 

  def destroy
    appt=Appointment.find(params[:id]).destroy
    render json: appt


  end 
 private

 def appt_params
  params.require(:appointment).permit(:user_id, :trainer_id, :date, :time)

 end
end 