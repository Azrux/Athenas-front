import { FC } from 'react';
import Typography from '@common-components/typography/typography';

const Test: FC = () => {
	return (
		<>
			<Typography type='title'>This is a title</Typography>
			<Typography type='subtitle'>This is a subtitle</Typography>
			<Typography>This is a paragraph</Typography>
			<Typography type='quote'>This is a quote</Typography>
			<Typography type='caption'>This is a caption</Typography>
			<Typography type='error'>This is an error</Typography>
		</>
	);
};

export default Test;
