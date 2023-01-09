import { TransparentButton } from "@paperplane/buttons";
import { ApiFile, formatDate, formatBytes } from "@paperplane/utils";
import type React from "react";
import { TableEntry } from "../../index";

interface Props {
	file: ApiFile;
	selected: boolean;
	onClick: (fileName: string) => void;
}

const FilesTableEntry: React.FC<Props> = ({ file, selected, onClick }) => {
	const getFilePreviewUrl = () => `${file.url}?preview=true`;
	const lockIcon = file.password ? "fa-solid fa-lock text-base" : "fa-solid fa-lock-open text-base";
	const viewIcon = file.visible ? "fa-solid fa-eye text-base" : "fa-solid fa-eye-slash text-base";

	const onKeyEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if ((event.target as any)?.id !== "filecard" || event.key !== "Enter") return;
		onClick(file.name);
	};

	const onMouseEvent = (event: React.MouseEvent<HTMLDivElement>) => {
		if ((event.target as any)?.id === "filebutton" || event.button !== 0) return;
		onClick(file.name);
	};

	return (
		<TableEntry>
			<td className="px-2">{file.name}</td>
			<td className="px-2">{formatBytes(file.size)}</td>
			<td className="px-2">{formatDate(file.date)}</td>
			<td className="px-2">
				<i className={lockIcon} />
			</td>
			<td className="px-2">
				<i className={viewIcon} />
			</td>
			<td className="flex items-center gap-2 px-2">
				<TransparentButton type="button">
					<i id="filebutton" className="fa-regular fa-trash-can" />
				</TransparentButton>
				<TransparentButton type="button">
					<i id="filebutton" className="fa-regular fa-pen-to-square" />
				</TransparentButton>
				<TransparentButton type="button">
					<i id="filebutton" className="fa-regular fa-copy" />
				</TransparentButton>
				<TransparentButton type="link" href={file.url} target="_blank">
					<i id="filebutton" className="fa-solid fa-up-right-from-square" />
				</TransparentButton>
			</td>
		</TableEntry>
	);
};

export default FilesTableEntry;
