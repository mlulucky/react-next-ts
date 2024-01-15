import { ChangeEvent, useState } from "react";

// 커스텀 훅
export default function useInput(): [string, (e: ChangeEvent<HTMLInputElement>) => void] {
	const [value, setValue] = useState('');
	const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}

	return [value, onChangeText];
}