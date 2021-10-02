<script>
	import Header from "./UI/Header.svelte";

	const WorkoutRegimen = [
		{
			month: 'September',
			PushDay1: {
				compoundExercise: 'Bench Press',
				Exercise2: 'Dumbbell Incline Bench/Guillotine Bench Press',
				Exercise3: 'Incline Machine Press',
				Exercise4: 'Decline Machine Press',
				Exercise5: 'Cable Upper Chest',
				Exercise6: 'Cable Side Delt raises',
				Exercise7: 'Dumbbell Shoulder Press',
				Exercise8: 'Front Delt raises'
			},
			PullDay1: {
				compoundExercise: 'Bent over rows/Pull ups superset',
				Exercise2: 'Chest Supported Rows',
				Exercise3: 'Machine Lat Pulldowns',
				Exercise4: 'Close-grip Lat pulldowns',
				Exercise5: 'Incline Dumbbell Curls',
				Exercise6: 'Leaning cable curls/tricep pulldown superset',
				Exercise7: 'tricep kickback/regular cable curls',
				Exercise8: 'Skull Crushers'
			},
			LegsDay1: {
				compoundExercise: 'Squats',
				Exercise2: 'Romanian Deadlift',
				Exercise3: 'Leg Press ',
				Exercise4: 'Leg Extension',
				Exercise5: 'Hamstring Curls',
				Exercise6: 'Bulgarian Split Squats',
				Exercise7: 'Calf raises',
				Exercise8: 'Stair Master'
			},
			PushDay2: {
				compoundExercise: 'Overhead Shoulder Press',
				Exercise2: 'Close-grip bench press',
				Exercise3: 'Cable Crossover',
				Exercise4: 'Overhead tricep extension',
				Exercise5: 'DumbbellLateral Raises',
				Exercise6: 'Rear Delt work',
				Exercise7: 'Chest-focused Dips',
				Exercise8: 'Burnout Push-ups'
			},
			PullDay2: {
				compoundExercise: 'Deadlift',
				Exercise2: 'Omni-grip Lat pulldown',
				Exercise3: 'Close-grip seated row',
				Exercise4: 'Cable Pullover',
				Exercise5: 'Rear Delt',
				Exercise6: 'Dumbbell Bicep Curl',
				Exercise7: 'Pronated/Supinated Curl superset'
			},
			LegsDay2: {
				compoundExercise: 'Hack Squat',
				Exercise2: 'Back Extension',
				Exercise3: 'Leg Extension',
				Exercise4: 'Hamstring Curl',
				Exercise5: 'Calf Raises',
				Exercise6: 'Leg Raises',
				Exercise7: 'Ab roller/Crunches superset',
				Exercise8: 'Stair Master'
			},
			Split: 'PPL'
		}
	]
</script>

<Header />
