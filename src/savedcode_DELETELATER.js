	      //1
	      <View style={[styles.scene]}>
	      <ListView
	        dataSource={workouts}
	        renderRow={(rowData) => {
	        	return(
	        		<TouchableOpacity>
		        		<Text onPress={this.updateCurrentExercise} style={styles.exercise} value={rowData}>{rowData}</Text>
		        	</TouchableOpacity>	
	        	)
	        }}
	      />
	      </View>