import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
    const { data: platform, error } = usePlatforms();
    const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const setSelectPlatformId = useGameQueryStore((s) => s.setPlatformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name ?? "Platform"}
            </MenuButton>
            <MenuList>
                {platform?.results.map((platform) => (
                    <MenuItem
                        onClick={() => setSelectPlatformId(platform.id)}
                        key={platform.id}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
