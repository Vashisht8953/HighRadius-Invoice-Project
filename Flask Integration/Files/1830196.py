### TODO: A utility class which will be created by the user , with Class name as " _[your roll number]" ,
# TODO: all transformations should be written inside a function which will be called inside the predict method
class _1830196():

    ## TODO: Please note that document id should be present till the getPredictions method
    def __tranformation1(self,data):

        # your transformation logic goes here
        return data

    def __transformation2(self,data):

        # your transformation logic goes here
        return data

    def getPredictions(self,data,model):
        data = self.__tranformation1(data)
        data = self.__transformation2(data)
        # your feature list, column names
        features = [""]###### Features names
        print(data[features])
        # data should be a dataFrame and not a numpy array
        predictions = model.predict(data[features])
        data['predictions'] = predictions
        pred = data.loc[:,['actual_open_amount','predictions']].to_dict(orient="records")
        return pred
