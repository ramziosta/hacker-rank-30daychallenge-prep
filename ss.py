def bill_for(month, active_subscription, users):
    # your code here!
    month = month.split("-")
    if active_subscription is None:
        return 0
    daily_rate = 0
    cost = active_subscription["monthly_price_in_dollars"]
    no_of_days = monthrange(2019, 2)[1]
    daily_rate += float(cost) / no_of_days
    total_cost = 0

    for user in users:
        d_date = user["deactivated_on"]
        if d_date is not None:
            no_of_days_active = d_date - datetime.date(int(month[0]), int(month[1]), 1)
            total_cost += no_of_days_active.days * daily_rate

        if d_date is None:
            total_cost += no_of_days * daily_rate

    return total_cost
    

    def bill_for(month, active_subscription, users):
    # your code here!
    month = datetime.datetime.strptime(month, '%Y-%m')
    month = datetime.date(month.year, month.month, 1)
    # first day of month
    first_day = first_day_of_month(month)
    # last day of month
    last_day = last_day_of_month(month)

    # get the number of days in the month
    days_in_month = (last_day - first_day).days + 1

    if active_subscription is None:
        return 0
        
    daily_rate = 0
    cost = active_subscription["monthly_price_in_dollars"]
    daily_rate += float(cost) / days_in_month
    total_cost = 0

    for user in users:
        d_date = user["deactivated_on"]
        a_date = user["activated_on"] 
        
        if d_date is not None:
            if d_date < month:
            # get the number of days between the deactivated date and the first day of the month
              total_cost += 0
            else:
              no_of_days_active = abs((d_date - first_day)).days + 1
              total_cost += no_of_days_active * daily_rate


        if d_date is None:
          # if the user is active in the month
          if a_date >= first_day and a_date <= last_day:
            # get the number of days between the activated date and the first day of the month
            no_of_days_active = abs((a_date - last_day)).days + 1
            total_cost += no_of_days_active * daily_rate
            
          # if the user didn't cancel the subscription
          else:
             total_cost += days_in_month * daily_rate

    return round(total_cost, 2)